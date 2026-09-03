(() => {
  function updateUI(index) {
    const sections = Portfolio.sections;
    sections.forEach((section, i) => section.classList.toggle("is-active", i === index));
    document.querySelector(".current-number").textContent = String(index + 1).padStart(2, "0");
    document.querySelector(".progress span").style.width = `${((index + 1) / sections.length) * 100}%`;
    document.querySelectorAll(".nav-link").forEach(btn => btn.classList.remove("is-current"));
    const id = sections[index]?.id;
    document.querySelectorAll(`.nav-link[data-target="${id}"]`).forEach(btn => btn.classList.add("is-current"));
  }

  window.goToSection = function(index) {
    if (Portfolio.locked || index < 0 || index >= Portfolio.sections.length || index === Portfolio.current) return;
    Portfolio.locked = true;
    const oldSection = Portfolio.sections[Portfolio.current];
    const newSection = Portfolio.sections[index];
    Portfolio.current = index;

    if (window.animateSection) window.animateSection(oldSection, newSection, index);
    else {
      updateUI(index);
      Portfolio.locked = false;
    }
    if (window.closeMobileMenu) window.closeMobileMenu();
  };

  window.goToTarget = function(id) {
    const section = document.getElementById(id);
    if (section) window.goToSection(Portfolio.sections.indexOf(section));
  };

  const init = () => {
    document.querySelector(".next").addEventListener("click", () => goToSection(Portfolio.current + 1));
    document.querySelector(".previous").addEventListener("click", () => goToSection(Portfolio.current - 1));

    window.addEventListener("keydown", e => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") goToSection(Portfolio.current + 1);
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") goToSection(Portfolio.current - 1);
    });

    let touchStart = 0;
    window.addEventListener("touchstart", e => touchStart = e.changedTouches[0].clientY, {passive:true});
    window.addEventListener("touchend", e => {
      const delta = touchStart - e.changedTouches[0].clientY;
      if (Math.abs(delta) > 50) goToSection(Portfolio.current + (delta > 0 ? 1 : -1));
    }, {passive:true});

    window.addEventListener("wheel", e => {
      if (Math.abs(e.deltaY) < 15) return;
      goToSection(Portfolio.current + (e.deltaY > 0 ? 1 : -1));
    }, {passive:true});

    updateUI(0);
  };
  window.addEventListener("portfolio:ready", init);
})();
