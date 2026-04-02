window.addEventListener("load", () => {
  // Smooth anchor scroll
  document.querySelectorAll('a[href*="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const id = a.getAttribute("href").split("#")[1];
      const el = document.getElementById(id);
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

const speed = 0.15;
let offset = -50;

function animateGradient() {
  offset -= speed;

  const x = offset % 100;
  const t = -Math.abs(100 + 2 * x);
  const s = 120 * Math.sin(t / 100);
  const gradientY = 80 + s; // Loop the animation

  document
    .querySelector("#landing")
    .setAttribute("style", `--gradient-pos:${gradientY}%`);

  requestAnimationFrame(animateGradient);
}
