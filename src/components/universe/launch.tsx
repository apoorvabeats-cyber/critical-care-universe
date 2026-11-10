import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { unlockBedsideAudio } from "@/components/bedside/audio";
import { asset } from "@/components/universe/patients";
import { CriticalCareUniverse } from "@/components/universe/ward";
import { loadUpdates, type UpdateItem } from "@/components/universe/updates";

const HUB = "https://apoorvabeats-cyber.github.io/ARDS-INTERACTIVE-SIMULATOR/";

type ScoreName = "lobby" | "hub" | "command" | "team";

const SCORE_FILES: Record<ScoreName, string> = {
  lobby: "universe/theme.mp3",
  hub: "universe/theme-hub.mp3",
  command: "universe/theme-command.mp3",
  team: "universe/theme-team.mp3",
};

const SCORE_READY: Record<ScoreName, boolean> = {
  lobby: true,
  hub: false,
  command: false,
  team: false,
};
let scoreEl: HTMLAudioElement | null = null;
let scoreEnabled = true;
let scoreNow: ScoreName | "off" = "off";
let scoreToken = 0;

function scoreElement() {
  if (typeof window === "undefined") return null;
  if (!scoreEl) {
    const el = new Audio();
    el.loop = true;
    el.preload = "auto";
    el.playsInline = true;
    el.volume = 0.48;
    el.setAttribute("data-score-el", "1");
    document.body.appendChild(el);
    scoreEl = el;
  }
  return scoreEl;
}

function scorePause() {
  scoreEl?.pause();
  scoreNow = "off";
}

async function scoreFor(name: ScoreName | "off") {
  const token = ++scoreToken;
  if (name === "off" || !scoreEnabled) {
    scorePause();
    return;
  }
  const url = asset(SCORE_FILES[name]);
  if (name !== "lobby") {
    scoreEl?.pause();
    const ok = SCORE_READY[name];
    if (!ok) {
      scorePause();
      return;
    }
  }
  if (token !== scoreToken) return;
  const el = scoreElement();
  if (!el || token !== scoreToken) return;
  if (el.dataset.score !== name) {
    el.dataset.score = name;
    el.src = url;
  }
  el.volume = 0.48;
  scoreNow = name;
  try {
    await el.play();
  } catch {
    /* phones block sound until the first tap; the next gesture retries */
  }
}

function scoreNudge() {
  if (!scoreEnabled) return;
  if (scoreEl && scoreNow !== "off") {
    if (scoreEl.paused) void scoreEl.play().catch(() => undefined);
    return;
  }
  void scoreFor("lobby");
}

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
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 40);
    camera.position.set(0.12, 1.12, 3.55);
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

    scene.add(solid(new THREE.CylinderGeometry(0.016, 0.016, 1.35, 10), 0xb7e4f5, -0.95, 0.95, 0.35));
    scene.add(solid(new THREE.BoxGeometry(0.1, 0.16, 0.07), 0x7fd4e6, -0.95, 1.55, 0.35, 0.35));
    scene.add(solid(new THREE.BoxGeometry(2.55, 0.07, 0.62), 0x1a3144, 0.18, 0.42, 0.72));
    const bedPhoto = new THREE.Mesh(
      new THREE.PlaneGeometry(2.7, 1.52),
      new THREE.MeshBasicMaterial({ color: 0x10283c }),
    );
    bedPhoto.position.set(0.18, 0.92, 0.78);
    bedPhoto.rotation.y = -0.02;
    scene.add(bedPhoto);
    const photoLoader = new THREE.TextureLoader();
    photoLoader.setCrossOrigin("anonymous");
    photoLoader.load(asset("universe/bed/room.jpg"), (tex: any) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      bedPhoto.material = new THREE.MeshBasicMaterial({ map: tex });
    });

    const vent = document.createElement("canvas");
    vent.width = 512;
    vent.height = 220;
    const ventTex = new THREE.CanvasTexture(vent);
    const ventScreen = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.36), new THREE.MeshBasicMaterial({ map: ventTex }));
    ventScreen.position.set(1.15, 1.05, 0.35);
    scene.add(ventScreen);

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
      paintVent(vent, now);
      ventTex.needsUpdate = true;
      if (!still) {
        halo.rotation.z = now / 8000;
        camera.position.x = 0.12 + Math.sin(now / 5200) * 0.04;
      }
      camera.lookAt(0.2, 0.78, 0.35);
      renderer.render(scene, camera);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(frame);
      renderer.dispose();
      if (renderer.domElement.parentNode === root) root.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="v-stage" ref={host} />;
}

function iconFor(title: string) {
  const text = title.toLowerCase();
  if (/kidney|kdigo|renal/.test(text)) return "kidney";
  if (/lung|ards|ventilat|airway|extubat/.test(text)) return "lung";
  if (/antimicrobial|antibiotic|steward|drug/.test(text)) return "pill";
  if (/haemodynamic|hemodynamic|heart|cardiac|shock/.test(text)) return "heart";
  return "cell";
}

function RowIcon({ kind }: { kind: string }) {
  if (kind === "kidney") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M8 5c2 1 3 3 3 7s-1 6-3 7c3 0 7-2 8-7s-2-8-8-7z" />
      </svg>
    );
  }
  if (kind === "lung") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M12 4v8M8 8c-3 1-4 4-4 8 2 2 4 2 5 0 1-2 1-4 3-4 2 0 2 2 3 4 1 2 3 2 5 0 0-4-1-7-4-8" />
      </svg>
    );
  }
  if (kind === "pill") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="8" width="18" height="8" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(-30 12 12)" />
      </svg>
    );
  }
  if (kind === "heart") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M12 19s-7-4.4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.6-7 9-7 9z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="8" cy="9" r="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="15" cy="13" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function News({ items, photo = false }: { items: UpdateItem[]; photo?: boolean }) {
  const rows = (copy: number) =>
    items.map((item) => (
      <a key={`${copy}-${item.href}-${item.title}`} href={item.href} target="_blank" rel="noreferrer">
        <i className={`v-ico v-${iconFor(item.title)}`}>
          <RowIcon kind={iconFor(item.title)} />
        </i>
        <span>
          {item.fresh ? <b>New</b> : null}
          <strong>{item.title}</strong>
          <em>{item.detail}</em>
        </span>
        <svg viewBox="0 0 24 24" className="v-chev" aria-hidden="true">
          <path fill="none" stroke="currentColor" strokeWidth="1.8" d="m9 6 6 6-6 6" />
        </svg>
      </a>
    ));
  return (
    <aside className={photo ? "v-feedbox" : "v-news"} style={photo ? { ["--marq" as string]: `${Math.max(22, items.length * 3.4)}s` } : undefined}>
      {photo ? null : (
        <p className="v-kicker">
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path fill="currentColor" d="M4 9v6h4l5 4V5L8 9H4zm11.5 3a3.5 3.5 0 0 0-1.8-3.1v6.2A3.5 3.5 0 0 0 15.5 12z" />
          </svg>
          Latest Updates
        </p>
      )}
      <div className="v-feed">
        <div className="v-marq">
          <div className="v-marq-set">{rows(0)}</div>
          <div className="v-marq-set" aria-hidden="true">
            {rows(1)}
          </div>
        </div>
      </div>
    </aside>
  );
}

function LiveMonitor() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    let frame = 0;
    const draw = (now: number) => {
      const cssW = canvas.clientWidth || 280;
      const cssH = canvas.clientHeight || 160;
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
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#020c26";
      ctx.fillRect(0, 0, w, h);
      const hr = Math.round(72 + Math.sin(now / 900) * 4);
      const sbp = Math.round(118 + Math.sin(now / 1300) * 4);
      const dbp = Math.round(76 + Math.sin(now / 1500) * 3);
      const spo2 = 97 + (Math.round(now / 1800) % 3);
      const rr = Math.round(16 + Math.sin(now / 1700));
      const rows = [
        { label: "HR", value: String(hr), color: "#3dde62", kind: "ecg" },
        { label: "BP", value: `${sbp}/${dbp}`, color: "#ff3d3d", kind: "art" },
        { label: "SpO2", value: String(spo2), color: "#3ecbff", kind: "pleth" },
        { label: "RR", value: String(rr), color: "#ffe14a", kind: "resp" },
      ];
      const split = w * 0.58;
      const rowH = h / rows.length;
      const sweep = (now / 2200) % 1;
      rows.forEach((row, i) => {
        const top = i * rowH;
        const mid = top + rowH * 0.62;
        ctx.beginPath();
        ctx.strokeStyle = row.color;
        ctx.lineWidth = Math.max(1.4, ratio * 1.15);
        let drawing = false;
        for (let x = 6; x < split - 4; x++) {
          const u = x / split;
          const gap = u > sweep && u < sweep + 0.045;
          const phase = (u * (row.kind === "resp" ? 1.1 : 2.2) + now / (row.kind === "resp" ? 1700 : 780)) % 1;
          let y = mid;
          const amp = rowH * (row.kind === "resp" ? 0.22 : 0.34);
          if (row.kind === "resp") {
            y -= Math.sin(phase * Math.PI * 2) * amp * 0.85;
          } else if (row.kind === "pleth") {
            if (phase > 0.05 && phase < 0.22) y -= Math.sin(((phase - 0.05) / 0.17) * Math.PI) * amp;
            if (phase > 0.22 && phase < 0.55) y -= Math.sin(((phase - 0.22) / 0.33) * Math.PI) * amp * 0.28;
          } else {
            if (phase > 0.08 && phase < 0.14) y -= Math.sin(((phase - 0.08) / 0.06) * Math.PI) * amp * 0.35;
            if (phase > 0.16 && phase < 0.24) y -= Math.sin(((phase - 0.16) / 0.08) * Math.PI) * amp;
            if (phase > 0.26 && phase < 0.4) y += Math.sin(((phase - 0.26) / 0.14) * Math.PI) * amp * 0.28;
          }
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
        ctx.fillStyle = row.color;
        ctx.font = `700 ${Math.max(8, rowH * 0.2)}px Figtree, sans-serif`;
        ctx.fillText(row.label, split + 4, top + rowH * 0.38);
        ctx.font = `800 ${Math.max(12, rowH * 0.42)}px Figtree, sans-serif`;
        ctx.fillText(row.value, split + 4, top + rowH * 0.82);
      });
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="v-live">
      <canvas ref={ref} aria-label="Live pulse, blood pressure, saturation and respiratory rate" />
    </div>
  );
}

const WORD = "CRITICAL CARE UNIVERSE";

function TypedTitle({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const done = useRef(onDone);
  done.current = onDone;
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(WORD.length);
      done.current();
      return;
    }
    let n = 0;
    const timer = window.setInterval(() => {
      n += 1;
      setCount(n);
      if (n >= WORD.length) {
        window.clearInterval(timer);
        window.setTimeout(() => done.current(), 180);
      }
    }, 78);
    return () => window.clearInterval(timer);
  }, []);
  const line1 = WORD.slice(0, Math.min(count, 13));
  const line2 = count > 14 ? WORD.slice(14, count) : "";
  return (
    <div className="v-word" aria-label="Critical Care Universe">
      <p>{line1}</p>
      <h1>{line2}</h1>
    </div>
  );
}

function LogoRing({ on }: { on: boolean }) {
  return (
    <svg className={on ? "v-ring on" : "v-ring"} viewBox="0 0 100 100" aria-hidden="true">
      <path d="M4 50A46 46 0 0 0 96 50A46 46 0 0 0 4 50" />
    </svg>
  );
}

const SLIDES = [
  {
    kicker: "Critical Care",
    title: "Hub",
    line: "Open the interactive hub",
    points: ["Cases, guidelines, and practice", "The same Critical Care Hub", "Learn, practice, excel"],
  },
  {
    kicker: "Critical Care",
    title: "Command Centre",
    line: "Manage six patients in real time",
    points: ["Monitor, treat, decide", "Handle deterioration", "Work with your team"],
  },
  {
    kicker: "Multi Disciplinary",
    title: "Team",
    line: "A shared look at the bedside",
    points: ["This bay is not open yet", "It stays empty until it is built", "The rest of the universe is unchanged"],
  },
] as const;

function GateFeed({ items }: { items: UpdateItem[] }) {
  const rows = (copy: number) =>
    items.map((item) => (
      <a key={`${copy}-${item.href}-${item.title}`} href={item.href} target="_blank" rel="noreferrer">
        <i className={`v-ico v-${iconFor(item.title)}`}>
          <RowIcon kind={iconFor(item.title)} />
        </i>
        <span>
          <b>{item.fresh ? "PubMed" : item.when}</b>
          <strong>{item.title}</strong>
          <em>
            {item.detail}
            {item.fresh ? ` · ${item.when}` : ""}
          </em>
        </span>
      </a>
    ));
  return (
    <aside className="v-gatefeed" style={{ ["--marq" as string]: `${Math.max(18, items.length * 3.2)}s` }}>
      <div className="v-feed">
        <div className="v-marq">
          <div className="v-marq-set">{rows(0)}</div>
          <div className="v-marq-set" aria-hidden="true">
            {rows(1)}
          </div>
        </div>
      </div>
    </aside>
  );
}

function Home({ onCommand }: { onCommand: () => void }) {
  const [items, setItems] = useState<UpdateItem[]>(FALLBACK);
  const [bay, setBay] = useState<"home" | "team" | "custom">("home");
  const [slide, setSlide] = useState(0);
  const [sheet, setSheet] = useState<"settings" | "more" | null>(null);
  const [music, setMusic] = useState(scoreEnabled);
  const lobbyRef = useRef<HTMLDivElement>(null);
  const musicOn = useRef(true);
  musicOn.current = music;

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

  const [root, setRoot] = useState("/universe/");
  useEffect(() => {
    const href = asset("universe/gate.jpg");
    setRoot(href.slice(0, href.lastIndexOf("/") + 1));
  }, []);
  const shot = root + ["gate-hub.jpg", "gate.jpg", "gate-team.jpg"][slide];

  const home = bay === "home";

  useEffect(() => {
    scoreEnabled = music;
    if (!home) {
      void scoreFor(bay === "team" ? "team" : "off");
      return;
    }
    void scoreFor(music ? "lobby" : "off");
  }, [music, home, bay]);

  useEffect(() => {
    const el = lobbyRef.current;
    if (!el || !home) return;
    const apply = () => {
      const vv = window.visualViewport;
      const w = vv?.width ?? window.innerWidth;
      const h = vv?.height ?? window.innerHeight;
      const portrait = h > w + 40 && w < 900;
      if (!portrait) {
        el.style.position = "";
        el.style.left = "";
        el.style.top = "";
        el.style.width = "";
        el.style.height = "";
        el.style.margin = "";
        el.style.transform = "";
        el.style.transformOrigin = "";
        return;
      }
      const x = vv?.offsetLeft ?? 0;
      const y = vv?.offsetTop ?? 0;
      el.style.position = "fixed";
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.width = `${Math.round(h)}px`;
      el.style.height = `${Math.round(w)}px`;
      el.style.margin = "0";
      el.style.transformOrigin = "top left";
      el.style.transform = "rotate(90deg) translateY(-100%)";
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    };
    apply();
    window.addEventListener("resize", apply);
    window.addEventListener("orientationchange", apply);
    window.visualViewport?.addEventListener("resize", apply);
    window.visualViewport?.addEventListener("scroll", apply);
    return () => {
      window.removeEventListener("resize", apply);
      window.removeEventListener("orientationchange", apply);
      window.visualViewport?.removeEventListener("resize", apply);
      window.visualViewport?.removeEventListener("scroll", apply);
      el.style.position = "";
      el.style.left = "";
      el.style.top = "";
      el.style.width = "";
      el.style.height = "";
      el.style.margin = "";
      el.style.transform = "";
      el.style.transformOrigin = "";
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [home]);

  const poke = () => {
    if (musicOn.current) scoreNudge();
  };
  const enter = () => {
    poke();
    if (slide === 0) {
      scorePause();
      window.location.assign(HUB);
      return;
    }
    if (slide === 1) {
      onCommand();
      return;
    }
    setBay("team");
  };

  return (
    <div ref={lobbyRef} className={home ? "v-home v-lobby" : "v-home"} onPointerDown={poke}>
      {home ? (
        <div className="v-photo">
          <div className="v-frame">
            <img src={shot} alt="" />
            <button type="button" className="v-arrow v-arrow-l" aria-label="Previous option" onClick={() => setSlide((n) => (n + 2) % 3)} />
            <button type="button" className="v-arrow v-arrow-r" aria-label="Next option" onClick={() => setSlide((n) => (n + 1) % 3)} />
            {slide === 1 ? <button type="button" className="v-enter" aria-label="Enter command centre" onClick={enter} /> : null}
            {slide !== 1 ? (
              <div className="v-slidecard">
                <p>{SLIDES[slide].kicker}</p>
                <h2>{SLIDES[slide].title}</h2>
                <strong>{SLIDES[slide].line}</strong>
                <ul>
                  {SLIDES[slide].points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <button type="button" onClick={enter}>
                  Enter Now
                </button>
              </div>
            ) : null}
            <GateFeed items={items} />
            <div className="v-dots" role="tablist" aria-label="Large screen">
              {SLIDES.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-label={item.title}
                  data-on={slide === index ? "1" : "0"}
                  onClick={() => setSlide(index)}
                />
              ))}
            </div>
            <button type="button" className="v-gear" aria-label="Settings" onClick={() => setSheet((cur) => (cur === "settings" ? null : "settings"))} />
            <nav className="v-mini" aria-label="Small options">
              <button type="button" data-on={sheet === "settings" ? "1" : "0"} onClick={() => setSheet((cur) => (cur === "settings" ? null : "settings"))}>
                Settings
              </button>
              <button type="button" data-on={sheet === "more" ? "1" : "0"} onClick={() => setSheet((cur) => (cur === "more" ? null : "more"))}>
                More
              </button>
            </nav>
            {sheet ? (
              <div className="v-sheet">
                <p>Dr Apoorva Chandra</p>
                <small>Intensivist</small>
                {sheet === "settings" ? (
                  <button
                    type="button"
                    onClick={() => {
                      const next = !music;
                      scoreEnabled = next;
                      setMusic(next);
                      if (!next) scorePause();
                      else void scoreFor(bay === "team" ? "team" : "lobby");
                    }}
                  >
                    Music {music ? "on" : "off"}
                  </button>
                ) : (
                  <button type="button" onClick={() => setBay("custom")}>
                    Customize
                  </button>
                )}
                <button type="button" onClick={() => setSheet(null)}>
                  Close
                </button>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <>
          <Stage />
          <header className="v-top">
            <div className="v-brand">
              <svg viewBox="0 0 64 64" width="58" height="58" aria-hidden="true">
                <path d="M48 12a22 22 0 1 0 0 40" fill="none" stroke="#1f8fff" strokeWidth="7" strokeLinecap="round" />
                <path d="M16 33h8l3-8 5 16 4-10h10" fill="none" stroke="#ff4d6a" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <p>Critical Care</p>
                <h1>Universe</h1>
              </div>
            </div>
            <p className="v-tag">Learn · Practice · Excel</p>
          </header>
          <div className="v-empty">
            <p className="v-kicker">{bay === "team" ? "Multi Disciplinary Team" : "Customize"}</p>
            <h2>This bay is not open yet.</h2>
            <p>It stays empty until that part of the universe is built.</p>
          </div>
          <nav className="v-tabs" aria-label="Universe">
            <button type="button" onClick={() => setBay("home")}>
              Back
            </button>
          </nav>
        </>
      )}
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
        void scoreFor("command");
        setBay("command");
      }}
    />
  );
}
