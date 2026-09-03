(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.animateSection = function(oldSection, newSection, index) {
    const gsap = window.gsap;
    const oldMedia = oldSection.querySelector(".section__media");
    const newMedia = newSection.querySelector(".section__media");
    const oldReveal = oldSection.querySelectorAll(".reveal");
    const newReveal = newSection.querySelectorAll(".reveal");

    newSection.classList.add("is-active");

    if (reduceMotion || !gsap) {
      oldSection.classList.remove("is-active");
      newReveal.forEach(el => { el.style.opacity = 1; el.style.transform = "none"; });
      document.querySelector(".current-number").textContent = String(index + 1).padStart(2, "0");
      document.querySelector(".progress span").style.width = `${((index + 1) / Portfolio.sections.length) * 100}%`;
      Portfolio.locked = false;
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        oldSection.classList.remove("is-active");
        Portfolio.locked = false;
      }
    });

    tl.set(newSection, {visibility:"visible", opacity:1})
      .fromTo(newMedia, {opacity:0, scale:1.12}, {opacity:1, scale:1.04, duration:.9, ease:"power3.out"}, 0)
      .to(oldMedia, {opacity:0, scale:1.1, duration:.75, ease:"power3.inOut"}, 0)
      .to(oldReveal, {opacity:0, y:-35, duration:.35, stagger:.02, ease:"power2.in"}, 0)
      .fromTo(newReveal, {opacity:0, y:45}, {opacity:1, y:0, duration:.75, stagger:.06, ease:"power3.out"}, .28)
      .to(".progress span", {width:`${((index + 1) / Portfolio.sections.length) * 100}%`, duration:.55, ease:"power2.out"}, 0)
      .call(() => {
        document.querySelector(".current-number").textContent = String(index + 1).padStart(2, "0");
        document.querySelectorAll(".nav-link").forEach(btn => btn.classList.remove("is-current"));
        document.querySelectorAll(`.nav-link[data-target="${newSection.id}"]`).forEach(btn => btn.classList.add("is-current"));
      }, [], .1);
  };

  const initHero = () => {
    if (reduceMotion || !window.gsap) return;
    const tl = gsap.timeline();
    tl.fromTo("#hero .reveal", {opacity:0,y:45}, {opacity:1,y:0,duration:1,stagger:.1,ease:"power3.out"})
      .fromTo(".hero-word", {opacity:0,y:30}, {opacity:1,y:0,duration:.6,ease:"power3.out"}, "-=.5");
  };

  const init = () => initHero();
  window.addEventListener("portfolio:ready", init);
})();
