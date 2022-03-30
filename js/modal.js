const btnsOpenModal = document.querySelectorAll(".btn--open-modal");
const modal = document.querySelector(".modal-window");
export const overlay = document.querySelector(".overlay");

const form = document.querySelector(".form");
const btnNextStep = document.querySelector(".form__btn-next-step");
const btnBack = document.querySelector(".form__btn-back");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

modal.querySelector(".btn--icon").addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});

btnNextStep.addEventListener("click", function (e) {
  e.preventDefault();
  form.style.transform = `translateX(-100%)`;
  this.blur();
});

btnBack.addEventListener("click", function (e) {
  e.preventDefault();
  form.style.transform = `translateX(0)`;
  this.blur();
});
