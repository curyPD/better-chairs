const btnsOpenModal = document.querySelectorAll(".btn--open-modal");
const modal = document.querySelector(".modal-window");
const overlay = document.querySelector(".overlay");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    openModal();
  });
});

modal.querySelector(".btn--icon").addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
