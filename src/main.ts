import "./styles.css";

document.querySelectorAll<HTMLElement>("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear().toString();
});

const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
let paused = motionQuery.matches;
try {
  paused ||= sessionStorage.getItem("dion-motion-paused") === "true";
} catch {
  // Motion controls still work when browser storage is unavailable.
}

const motionButton =
  document.querySelector<HTMLButtonElement>(".motion-toggle");
function applyMotion() {
  document.body.classList.toggle("motion-paused", paused);
  if (!motionButton) return;
  motionButton.setAttribute("aria-pressed", String(paused));
  motionButton.innerHTML = `${paused ? "Resume motion" : "Pause motion"} <span aria-hidden="true">${paused ? "▷" : "Ⅱ"}</span>`;
}
applyMotion();
if (motionButton) {
  motionButton.hidden = false;
  motionButton.addEventListener("click", () => {
    paused = !paused;
    applyMotion();
    try {
      sessionStorage.setItem("dion-motion-paused", String(paused));
    } catch {
      // Keep the control usable without persistence.
    }
  });
}
motionQuery.addEventListener("change", (event) => {
  paused = event.matches;
  applyMotion();
});

// The cast responds gently to a mouse; navigation also works by touch or keyboard.
const stage = document.querySelector<HTMLElement>(".ensemble-stage");
if (stage && window.matchMedia("(pointer: fine)").matches) {
  stage.addEventListener("pointermove", (event) => {
    if (paused || motionQuery.matches) return;
    const rect = stage.getBoundingClientRect();
    stage.style.setProperty(
      "--pointer-x",
      `${((event.clientX - rect.left) / rect.width - 0.5) * 12}px`,
    );
  });
  stage.addEventListener("pointerleave", () =>
    stage.style.setProperty("--pointer-x", "0px"),
  );
}
