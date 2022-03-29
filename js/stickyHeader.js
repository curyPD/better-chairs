const header = document.querySelector(".header");
const heroSection = document.querySelector(".hero");

const options = {
  root: null,
  threshold: 0,
  rootMargin: `-${header.getBoundingClientRect().height}px`,
};

const callback = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) header.classList.add("sticky");
    if (entry.isIntersecting) header.classList.remove("sticky");
  });
};

const observer = new IntersectionObserver(callback, options);

observer.observe(heroSection);
