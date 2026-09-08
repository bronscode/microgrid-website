window.addEventListener("load", () => {
  // Smooth anchor scroll
  document.querySelectorAll('a[href*="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href") || "";
      const url = new URL(href, window.location.origin);
      const isSamePage = url.pathname === window.location.pathname;

      // Let the browser handle cross-page anchors (e.g. /en/#features)
      if (!isSamePage) {
        return;
      }

      const id = url.hash.replace("#", "");
      const el = document.getElementById(id);
      if (!el) {
        return;
      }

      e.preventDefault();
      const top = el.offsetTop - 50;
      window.scroll({
        top,
        left: 0,
        behavior: "smooth",
      });
    });
  });

  document.querySelector("#landing").classList.add("in");
  animateGradient();
});

const speed = 0.2;
let offset = -50;

function animateGradient() {
  offset -= speed;

  const x = offset % 100;
  const t = -Math.abs(100 + 2 * x);
  const s = 45 * Math.sin(t / 100);
  const gradientY = 80 + s; // Loop the animation

  document
    .querySelector("#landing")
    .setAttribute("style", `--gradient-pos:${gradientY}%`);

  requestAnimationFrame(animateGradient);
}
