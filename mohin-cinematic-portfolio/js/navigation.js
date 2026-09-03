(() => {
  const init = () => {
    const buttons = document.querySelectorAll("[data-target]");
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const target = document.getElementById(button.dataset.target);
        if (target) window.goToSection(Portfolio.sections.indexOf(target));
      });
    });
  };
  window.addEventListener("portfolio:ready", init);
})();
