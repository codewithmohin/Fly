(() => {
  const init = () => {
    const cursor = document.querySelector(".scroll-cursor");
    if (!cursor || window.matchMedia("(pointer: coarse)").matches) return;
    let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y;

    window.addEventListener("pointermove", e => { tx = e.clientX; ty = e.clientY; });
    const move = () => {
      x += (tx - x) * .18;
      y += (ty - y) * .18;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      requestAnimationFrame(move);
    };
    move();

    document.querySelectorAll("a, button, .project-card").forEach(el => {
      el.addEventListener("pointerenter", () => document.body.classList.add("cursor-link"));
      el.addEventListener("pointerleave", () => document.body.classList.remove("cursor-link"));
    });

    document.querySelectorAll(".magnetic").forEach(el => {
      el.addEventListener("pointermove", e => {
        const r = el.getBoundingClientRect();
        const mx = (e.clientX - (r.left + r.width / 2)) * .12;
        const my = (e.clientY - (r.top + r.height / 2)) * .12;
        el.style.transform = `translate(${mx}px, ${my}px)`;
      });
      el.addEventListener("pointerleave", () => el.style.transform = "");
    });
  };
  window.addEventListener("portfolio:ready", init);
})();
