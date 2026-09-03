(() => {
  const init = () => {
    const preloader = document.querySelector(".preloader");
    const line = document.querySelector(".preloader__line span");
    const percent = document.querySelector(".preloader__percent");
    const start = performance.now();
    const duration = 900;

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.round(progress * 100);
      line.style.width = `${value}%`;
      percent.textContent = `${value}%`;

      if (progress < 1) requestAnimationFrame(tick);
      else {
        if (window.gsap) {
          gsap.to(preloader, {opacity:0, duration:.7, ease:"power2.out", onComplete:() => preloader.remove()});
        } else preloader.remove();
      }
    }
    requestAnimationFrame(tick);
  };
  window.addEventListener("portfolio:ready", init);
})();
