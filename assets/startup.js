(() => {
  const startup = document.getElementById("startup");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.setTimeout(() => {
    const audio = document.querySelector("[data-startup-src]");
    audio.src = audio.dataset.startupSrc;

    const app = document.createElement("script");
    app.src = "./assets/app.js";
    app.type = "module";
    app.onerror = () => {
      startup.setAttribute("role", "alert");
      startup.setAttribute("aria-label", "The app could not be loaded. Please reload the page.");
      startup.querySelector("p").textContent = "The app could not be loaded. Please reload the page.";
    };
    app.onload = () => {
      startup.classList.add("is-finished");
      window.setTimeout(() => startup.remove(), reducedMotion ? 0 : 350);
    };
    document.body.appendChild(app);
  }, reducedMotion ? 400 : 3300);
})();
