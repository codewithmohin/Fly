window.Portfolio = {
  current: 0,
  locked: false,
  sections: [],
  gsap: window.gsap
};

document.addEventListener("DOMContentLoaded", () => {
  Portfolio.sections = [...document.querySelectorAll(".section")];
  window.dispatchEvent(new Event("portfolio:ready"));
});
