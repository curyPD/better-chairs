const sections = document.querySelectorAll("section");

const options = {
  root: null,
  threshold: 0.35,
};

const callback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("unrevealed");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(callback, options);

if (window.innerWidth > 600) {
  sections.forEach((section) => {
    if (section.getAttribute("id") === "hero") return;
    section.classList.add("unrevealed");
    observer.observe(section);
  });
}
