(() => {
  const startup = document.getElementById("startup");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const audio = document.querySelector("audio[data-score-el]");
  const musicButton = startup.querySelector(".startup-music");
  const musicError = startup.querySelector(".startup-music-error");

  audio.volume = 0.48;
  const startMusic = () => {
    audio.play().then(() => {
      musicButton.hidden = true;
      musicError.hidden = true;
    }).catch((error) => {
      if (error.name === "NotAllowedError") {
        musicButton.hidden = false;
      } else {
        musicButton.hidden = true;
        musicError.textContent = "Background music could not be played.";
        musicError.hidden = false;
        console.error("Background music could not be played:", error);
      }
    });
  };
  musicButton.addEventListener("click", startMusic);
  startMusic();

  window.setTimeout(() => {
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
  }, reducedMotion ? 400 : 4550);
})();
