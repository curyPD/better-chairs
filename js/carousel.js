const btnLeft = document.querySelector(".btn--round-left");
const btnRight = document.querySelector(".btn--round-right");
const slides = document.querySelectorAll(".testimonial");
const carouselBox = document.querySelector(".carousel");

let curSlide = 0;

btnLeft.addEventListener("click", function () {
  curSlide = curSlide === 0 ? slides.length - 1 : curSlide - 1;
  moveTo(curSlide);
});

btnRight.addEventListener("click", function () {
  curSlide = curSlide === slides.length - 1 ? 0 : curSlide + 1;
  moveTo(curSlide);
});

const moveTo = function (curSlide) {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${100 * -curSlide}%)`;
  });
  const dots = Array.from(carouselBox.querySelectorAll(".dot"));
  dots.forEach((dot) => dot.classList.remove("dot--active"));
  const activeDot = dots.find((dot) => +dot.dataset.slide === curSlide);
  activeDot.classList.add("dot--active");
};

const createDots = function () {
  const dotsContainer = document.createElement("div");
  dotsContainer.classList.add("dots-container");
  dotsContainer.innerHTML = [...slides].reduce(
    (acc, _, i) =>
      (acc += `<button class="dot ${
        i === 0 ? "dot--active" : ""
      }" data-slide="${i}"></button>`),
    ""
  );
  carouselBox.append(dotsContainer);
};

createDots();

carouselBox.addEventListener("click", function (e) {
  if (!e.target.classList.contains("dot")) return;
  curSlide = +e.target.dataset.slide;
  moveTo(curSlide);
});
