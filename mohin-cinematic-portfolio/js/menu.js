(() => {
  let menu, toggle;
  function close() {
    if (!menu) return;
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
  window.closeMobileMenu = close;

  const init = () => {
    menu = document.querySelector(".mobile-menu");
    toggle = document.querySelector(".menu-toggle");
    toggle.addEventListener("click", () => {
      const open = !menu.classList.contains("is-open");
      menu.classList.toggle("is-open", open);
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      menu.setAttribute("aria-hidden", String(!open));
    });
    menu.querySelectorAll("button").forEach(btn => btn.addEventListener("click", () => goToTarget(btn.dataset.target)));
  };
  window.addEventListener("portfolio:ready", init);
})();
