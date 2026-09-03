(() => {
  const init = () => {
    const layer = document.querySelector(".legal-layer");
    const title = document.querySelector("#legal-title");
    const content = document.querySelector("#legal-content");
    const close = () => { layer.classList.remove("is-open"); layer.setAttribute("aria-hidden","true"); };

    const data = {
      privacy: {
        title: "Privacy",
        html: "<p>This portfolio is a front-end demonstration. Replace this placeholder with your actual privacy policy before publishing.</p>"
      },
      imprint: {
        title: "Imprint",
        html: "<p>Replace this placeholder with your required legal/business information before publishing the website.</p>"
      }
    };

    document.querySelectorAll("[data-legal]").forEach(btn => btn.addEventListener("click", () => {
      const item = data[btn.dataset.legal];
      title.textContent = item.title;
      content.innerHTML = item.html;
      layer.classList.add("is-open");
      layer.setAttribute("aria-hidden","false");
    }));
    document.querySelector(".legal-close").addEventListener("click", close);
    document.querySelector(".legal-backdrop").addEventListener("click", close);
    document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
  };
  window.addEventListener("portfolio:ready", init);
})();
