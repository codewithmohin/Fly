(() => {
  /*
    Optional video layer:
    Add a <video class="section-video"> inside a section and set its source.
    The project works without videos; gradient media placeholders are used by default.
  */
  const init = () => {
    document.querySelectorAll("video").forEach(video => {
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
    });
  };
  window.addEventListener("portfolio:ready", init);
})();
