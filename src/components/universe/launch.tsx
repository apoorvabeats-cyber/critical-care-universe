import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { unlockBedsideAudio } from "@/components/bedside/audio";
import { asset } from "@/components/universe/patients";
import { CriticalCareUniverse } from "@/components/universe/ward";
import { loadUpdates, type UpdateItem } from "@/components/universe/updates";

const HUB = "https://apoorvabeats-cyber.github.io/ARDS-INTERACTIVE-SIMULATOR/";

const FALLBACK: UpdateItem[] = [
  {
    title: "Surviving Sepsis Campaign",
    detail: "International guidance for sepsis and septic shock",
    href: "https://www.sccm.org/SurvivingSepsisCampaign/Guidelines",
    when: "Guideline",
    fresh: false,
  },
  {
    title: "KDIGO acute kidney injury",
    detail: "Prevention, staging, and renal replacement",
    href: "https://kdigo.org/guidelines/acute-kidney-injury/",
    when: "Guideline",
    fresh: false,
  },
  {
    title: "ARDS lung-protective ventilation",
    detail: "Low tidal volume and pressure limitation",
    href: "https://pubmed.ncbi.nlm.nih.gov/10793162/",
    when: "Landmark",
    fresh: false,
  },
  {
    title: "IDSA antimicrobial stewardship",
    detail: "Using the right drug, for the right duration",
    href: "https://www.idsociety.org/practice-guideline/antimicrobial-stewardship/",
    when: "Guideline",
    fresh: false,
  },
  {
    title: "ESICM haemodynamic monitoring",
    detail: "Bedside assessment of shock and fluid",
    href: "https://www.esicm.org/resources/guidelines/",
    when: "Guidance",
    fresh: false,
  },
];

type Bay = "home" | "command" | "team" | "custom";

function paintMonitor(canvas: HTMLCanvasElement, now: number) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const w = canvas.width;
  const h = canvas.height;
  ctx.fillStyle = "#041018";
  ctx.fillRect(0, 0, w, h);
  const hr = Math.round(78 + Math.sin(now / 900) * 6);
  const spo2 = Math.round(96 + Math.sin(now / 1400) * 1);
  const rr = Math.round(16 + Math.sin(now / 1600) * 2);
  ctx.font = "700 28px Figtree, sans-serif";
  ctx.fillStyle = "#3ee07a";
  ctx.fillText(String(hr), 16, 40);
  ctx.fillStyle = "#ff6b6b";
  ctx.fillText("118/76", 110, 40);
  ctx.fillStyle = "#7fd4e6";
  ctx.fillText(String(spo2), 250, 40);
  ctx.fillStyle = "#e2b48a";
  ctx.fillText(String(rr), 330, 40);
  ctx.font = "600 14px Figtree, sans-serif";
  ctx.fillStyle = "#8aa4b8";
  ctx.fillText("HR", 16, 58);
  ctx.fillText("BP", 110, 58);
  ctx.fillText("SpO2", 250, 58);
  ctx.fillText("RR", 330, 58);
  ctx.beginPath();
  ctx.strokeStyle = "#3ee07a";
  ctx.lineWidth = 2;
  for (let x = 0; x < w; x++) {
    const t = x / w + now / 1800;
    const cycle = (t * 4) % 1;
    let y = h * 0.72;
    if (cycle > 0.12 && cycle < 0.18) y -= Math.sin(((cycle - 0.12) / 0.06) * Math.PI) * 18;
    if (cycle > 0.2 && cycle < 0.32) y -= Math.sin(((cycle - 0.2) / 0.12) * Math.PI) * 46;
    if (cycle > 0.34 && cycle < 0.46) y += Math.sin(((cycle - 0.34) / 0.12) * Math.PI) * 16;
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.strokeStyle = "#7fd4e6";
  ctx.beginPath();
  for (let x = 0; x < w; x++) {
    const wave = Math.sin(x / 18 + now / 400) * 10;
    const y = h * 0.9 + wave;
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
}

function paintVent(canvas: HTMLCanvasElement, now: number) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const w = canvas.width;
  const h = canvas.height;
  ctx.fillStyle = "#041018";
  ctx.fillRect(0, 0, w, h);
  ctx.font = "600 18px Figtree, sans-serif";
  ctx.fillStyle = "#e2b48a";
  ctx.fillText("Flow", 16, 28);
  ctx.fillStyle = "#8aa4b8";
  ctx.fillText("PEEP 8   VT 420", 90, 28);
  ctx.beginPath();
  ctx.strokeStyle = "#7fd4e6";
  ctx.lineWidth = 2;
  for (let x = 0; x < w; x++) {
    const cycle = (x / w + now / 1600) % 1;
    let y = h * 0.7;
    if (cycle < 0.38) y -= Math.sin((cycle / 0.38) * Math.PI) * h * 0.36;
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
}

function solid(geometry: any, color: number, x: number, y: number, z: number, glow = 0) {
  const material = new THREE.MeshStandardMaterial({
    color,
    roughness: 0.48,
    metalness: 0.12,
    emissive: glow ? color : 0x000000,
    emissiveIntensity: glow,
  });
  const item = new THREE.Mesh(geometry, material);
  item.position.set(x, y, z);
  return item;
}

function Stage() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = host.current;
    if (!root) return;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.setClearColor(0x07111c, 1);
    root.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x07111c, 7, 18);
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 40);
    camera.position.set(0.1, 1.28, 4.55);
    scene.add(new THREE.HemisphereLight(0xb7e7ff, 0x071018, 0.9));
    const key = new THREE.DirectionalLight(0x9fd8ff, 1.2);
    key.position.set(2.2, 4.2, 3.4);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x2f6bff, 0.85);
    rim.position.set(-3.2, 2.4, -1.5);
    scene.add(rim);

    const grid = document.createElement("canvas");
    grid.width = 512;
    grid.height = 512;
    const pen = grid.getContext("2d");
    if (pen) {
      pen.fillStyle = "#071018";
      pen.fillRect(0, 0, 512, 512);
      pen.strokeStyle = "#14324c";
      pen.lineWidth = 2;
      for (let i = 0; i <= 512; i += 32) {
        pen.beginPath();
        pen.moveTo(i, 0);
        pen.lineTo(i, 512);
        pen.stroke();
        pen.beginPath();
        pen.moveTo(0, i);
        pen.lineTo(512, i);
        pen.stroke();
      }
    }
    const floorTex = new THREE.CanvasTexture(grid);
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(16, 12), new THREE.MeshBasicMaterial({ map: floorTex }));
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);
    const wall = new THREE.Mesh(
      new THREE.PlaneGeometry(16, 6),
      new THREE.MeshStandardMaterial({ color: 0x0b1a2c, roughness: 1, metalness: 0 }),
    );
    wall.position.set(0, 2.4, -3.1);
    scene.add(wall);
    const halo = new THREE.Mesh(
      new THREE.TorusGeometry(2.4, 0.015, 12, 80),
      new THREE.MeshBasicMaterial({ color: 0x3ecbff }),
    );
    halo.position.set(0.2, 2.85, -1.2);
    scene.add(halo);

    scene.add(solid(new THREE.CylinderGeometry(0.018, 0.018, 1.55, 10), 0xb7e4f5, -1.95, 1.15, -0.15));
    scene.add(solid(new THREE.BoxGeometry(0.12, 0.18, 0.08), 0x7fd4e6, -1.95, 1.78, -0.15, 0.35));
    const bedPhoto = new THREE.Mesh(
      new THREE.PlaneGeometry(1.85, 1.22),
      new THREE.MeshBasicMaterial({ color: 0x10283c }),
    );
    bedPhoto.position.set(-0.95, 1.05, 0.35);
    bedPhoto.rotation.y = 0.22;
    scene.add(bedPhoto);
    const photoLoader = new THREE.TextureLoader();
    photoLoader.load(asset("universe/bed/room.jpg"), (tex: { colorSpace?: string }) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      bedPhoto.material = new THREE.MeshBasicMaterial({ map: tex });
    });

    const monitor = document.createElement("canvas");
    monitor.width = 512;
    monitor.height = 280;
    const vent = document.createElement("canvas");
    vent.width = 512;
    vent.height = 220;
    const monTex = new THREE.CanvasTexture(monitor);
    const ventTex = new THREE.CanvasTexture(vent);
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.35, 0.74), new THREE.MeshBasicMaterial({ map: monTex }));
    screen.position.set(-1.15, 1.72, -0.85);
    screen.rotation.y = 0.18;
    scene.add(screen);
    const ventScreen = new THREE.Mesh(new THREE.PlaneGeometry(0.95, 0.42), new THREE.MeshBasicMaterial({ map: ventTex }));
    ventScreen.position.set(0.15, 1.85, -1.55);
    scene.add(ventScreen);
    scene.add(solid(new THREE.BoxGeometry(1.42, 0.06, 0.04), 0x071018, -1.15, 1.32, -0.82));

    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.02, 16, 64), new THREE.MeshBasicMaterial({ color: 0x3ecbff }));
    ring.rotation.x = Math.PI / 2;
    ring.position.set(1.05, 0.02, 0.15);
    scene.add(ring);
    const deck = new THREE.Mesh(new THREE.CircleGeometry(0.78, 40), new THREE.MeshBasicMaterial({ color: 0x0c2740 }));
    deck.rotation.x = -Math.PI / 2;
    deck.position.set(1.05, 0.01, 0.15);
    scene.add(deck);

    const body = new THREE.Group();
    body.position.set(1.05, 0, 0.15);
    scene.add(body);
    let dead = false;
    import("three/addons/loaders/GLTFLoader.js").then(({ GLTFLoader }) => {
      if (dead) return;
      const loader = new GLTFLoader();
      loader.load(asset("models/human-reference.glb"), (gltf: { scene: any }) => {
        if (dead) return;
        const model = gltf.scene;
        model.traverse((obj: { isMesh?: boolean; material?: unknown }) => {
          if (!obj.isMesh) return;
          obj.material = new THREE.MeshStandardMaterial({
            color: 0x10283c,
            emissive: 0x1aa6ff,
            emissiveIntensity: 0.7,
            transparent: true,
            opacity: 0.82,
            roughness: 0.35,
            metalness: 0.08,
          });
        });
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const scale = 1.62 / Math.max(0.01, size.y);
        model.scale.setScalar(scale);
        model.position.set(-center.x * scale, -box.min.y * scale, -center.z * scale);
        body.add(model);
      });
    });

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const loop = (now: number) => {
      const w = root.clientWidth || 1;
      const h = root.clientHeight || 1;
      if (renderer.domElement.width !== Math.floor(w * renderer.getPixelRatio())) {
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      }
      paintMonitor(monitor, now);
      paintVent(vent, now);
      monTex.needsUpdate = true;
      ventTex.needsUpdate = true;
      if (!still) {
        body.rotation.y = now / 4200;
        ring.rotation.z = now / 2400;
        halo.rotation.z = now / 8000;
        camera.position.x = 0.1 + Math.sin(now / 5200) * 0.16;
      }
      camera.lookAt(0.05, 1.05, 0);
      renderer.render(scene, camera);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => {
      dead = true;
      cancelAnimationFrame(frame);
      renderer.dispose();
      if (renderer.domElement.parentNode === root) root.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="v-stage" ref={host} />;
}

function News({ items }: { items: UpdateItem[] }) {
  return (
    <aside className="v-news">
      <p className="v-kicker">
        <i className="v-dot" />
        Latest updates
      </p>
      <p className="v-sub">Guidelines, trials, and consensus, as they are published.</p>
      <div className="v-feed">
        {items.map((item) => (
          <a key={`${item.href}-${item.title}`} href={item.href} target="_blank" rel="noreferrer">
            <b>{item.fresh ? "New" : item.when}</b>
            <strong>{item.title}</strong>
            <span>{item.detail}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}

function LiveMonitor() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [read, setRead] = useState({ hr: 76, sbp: 118, dbp: 74, spo2: 98, rr: 16 });

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    let frame = 0;
    let last = 0;
    const draw = (now: number) => {
      const cssW = canvas.clientWidth || 280;
      const cssH = canvas.clientHeight || 120;
      const ratio = Math.min(2, window.devicePixelRatio || 1);
      const w = Math.max(8, Math.floor(cssW * ratio));
      const h = Math.max(8, Math.floor(cssH * ratio));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = "#04110c";
      ctx.fillRect(0, 0, w, h);
      const hr = Math.round(76 + Math.sin(now / 900) * 4);
      const sbp = Math.round(118 + Math.sin(now / 1300) * 3);
      const dbp = Math.round(74 + Math.sin(now / 1500) * 2);
      const rr = Math.round(16 + Math.sin(now / 1700));
      if (now - last > 400) {
        last = now;
        setRead({ hr, sbp, dbp, spo2: 98, rr });
      }
      const top = h * 0.42;
      const sweep = (now / 2400) % 1;
      const drawLane = (color: string, mid: number, amp: number, rate: number) => {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = Math.max(2.2, ratio * 1.4);
        let drawing = false;
        for (let x = 0; x < w; x++) {
          const u = x / w;
          const gap = u > sweep && u < sweep + 0.05;
          const phase = (u * rate + now / 800) % 1;
          let y = top + (h - top) * mid;
          if (phase > 0.1 && phase < 0.16) y -= Math.sin(((phase - 0.1) / 0.06) * Math.PI) * (h - top) * amp * 0.35;
          if (phase > 0.18 && phase < 0.26) y -= Math.sin(((phase - 0.18) / 0.08) * Math.PI) * (h - top) * amp;
          if (phase > 0.28 && phase < 0.4) y += Math.sin(((phase - 0.28) / 0.12) * Math.PI) * (h - top) * amp * 0.28;
          if (gap) {
            drawing = false;
            continue;
          }
          if (!drawing) {
            ctx.moveTo(x, y);
            drawing = true;
          } else ctx.lineTo(x, y);
        }
        ctx.stroke();
      };
      drawLane("#3ee07a", 0.42, 0.55, 2.1);
      drawLane("#7fd4e6", 0.78, 0.22, 2.1);
      ctx.fillStyle = "#f3ffe8";
      ctx.fillRect(sweep * w, top, Math.max(3, ratio * 2), h - top - 6);
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="v-monitor">
      <div className="v-readout">
        <b className="v-hr">{read.hr}</b>
        <b className="v-bp">
          {read.sbp}/{read.dbp}
        </b>
        <b className="v-sat">{read.spo2}</b>
        <b className="v-rr">{read.rr}</b>
      </div>
      <canvas ref={ref} aria-label="Live bay monitor" />
    </div>
  );
}

const BOARD = [
  { rate: "91", tone: "rose", title: "Severe ARDS", line: "Saturation 84. The plateau is climbing.", tag: "Ventilator" },
  { rate: "88", tone: "amber", title: "Septic shock", line: "Fever, a falling pressure, no drug in yet.", tag: "Shock" },
  { rate: "86", tone: "cyan", title: "Ketoacidosis", line: "Missed insulin. The breathing is deep.", tag: "Endocrine" },
];

function Board({ onShift }: { onShift: () => void }) {
  return (
    <aside className="v-board">
      <p className="v-kicker">On the board</p>
      <h2>Take the shift</h2>
      <div className="v-cards">
        {BOARD.map((card) => (
          <button key={card.title} type="button" className={`v-card v-${card.tone}`} onClick={onShift}>
            <b>{card.rate}</b>
            <strong>{card.title}</strong>
            <span>{card.line}</span>
            <em>{card.tag}</em>
          </button>
        ))}
      </div>
    </aside>
  );
}

function Home({ onCommand }: { onCommand: () => void }) {
  const [items, setItems] = useState<UpdateItem[]>(FALLBACK);
  const [bay, setBay] = useState<"home" | "team" | "custom">("home");

  useEffect(() => {
    let stop = false;
    const pull = () => {
      loadUpdates()
        .then((next) => {
          if (!stop && next?.length) setItems(next);
        })
        .catch(() => undefined);
    };
    pull();
    const timer = window.setInterval(pull, 3 * 60 * 1000);
    return () => {
      stop = true;
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div className="v-home">
      <Stage />
      <header className="v-top">
        <div className="v-brand">
          <svg viewBox="0 0 64 64" width="42" height="42" aria-hidden="true">
            <path d="M32 6a26 26 0 1 0 0 52" fill="none" stroke="#2f8cff" strokeWidth="6" />
            <path d="M8 34h10l4-10 6 20 5-12h23" fill="none" stroke="#7ee7ff" strokeWidth="3" />
          </svg>
          <div>
            <p>Critical Care</p>
            <h1>Universe</h1>
          </div>
        </div>
        <p className="v-tag">Learn · Practice · Excel</p>
      </header>
      {bay === "home" ? (
        <div className="v-float">
          <News items={items} />
          <LiveMonitor />
          <Board onShift={onCommand} />
        </div>
      ) : (
        <div className="v-empty">
          <p className="v-kicker">{bay === "team" ? "Multi disciplinary team" : "Customize"}</p>
          <h2>This bay is not open yet.</h2>
          <p>It stays empty until that part of the universe is built.</p>
        </div>
      )}
      <nav className="v-tabs" aria-label="Universe">
        <button type="button" onClick={() => window.location.assign(HUB)}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path fill="none" stroke="currentColor" strokeWidth="1.7" d="M4 10.5 12 4l8 6.5V20H4z" />
            <path fill="none" stroke="currentColor" strokeWidth="1.7" d="M9 20v-6h6v6" />
          </svg>
          <span>Critical Care</span>
          Hub
        </button>
        <button type="button" onClick={onCommand}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="4" width="18" height="12" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
            <path fill="none" stroke="currentColor" strokeWidth="1.7" d="M7 20h10M9 16v4M15 16v4M6 10h4l1.5-2 2 4 1.5-2H18" />
          </svg>
          <span>Critical Care</span>
          Command Centre
        </button>
        <button type="button" data-on={bay === "team" ? "1" : "0"} onClick={() => setBay((cur) => (cur === "team" ? "home" : "team"))}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="8" cy="9" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
            <circle cx="16" cy="9" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
            <path fill="none" stroke="currentColor" strokeWidth="1.7" d="M3.5 18c.6-2.2 2.2-3.2 4.5-3.2s3.9 1 4.5 3.2M11.5 18c.6-2.2 2.2-3.2 4.5-3.2s3.9 1 4.5 3.2" />
          </svg>
          <span>Multi</span>
          Disciplinary Team
        </button>
        <button type="button" data-on={bay === "custom" ? "1" : "0"} onClick={() => setBay((cur) => (cur === "custom" ? "home" : "custom"))}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
            <path fill="none" stroke="currentColor" strokeWidth="1.7" d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M6 6l1.6 1.6M16.4 16.4 18 18M18 6l-1.6 1.6M7.6 16.4 6 18" />
          </svg>
          <span>Unit</span>
          Customize
        </button>
      </nav>
    </div>
  );
}

export function UniverseShell() {
  const [bay, setBay] = useState<Bay>("home");
  if (bay === "command") {
    return <CriticalCareUniverse onHome={() => setBay("home")} />;
  }
  return (
    <Home
      onCommand={() => {
        unlockBedsideAudio();
        setBay("command");
      }}
    />
  );
}
