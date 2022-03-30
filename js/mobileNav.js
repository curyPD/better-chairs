import { header } from "./stickyHeader.js";
import { overlay } from "./modal.js";

const btnOpenNav = document.querySelector(".btn--mobile-nav");
const mobileNav = document.querySelector(".mobile-nav");
const btnOpenModal = mobileNav.querySelector(".btn--open-modal");
const mobileNavLinks = mobileNav.querySelectorAll(".mobile-nav__link");

const openMobileModal = function () {
  closeMobileNav.call(this);
  overlay.classList.remove("hidden");
};

const openMobileNav = function () {
  document.body.classList.add("mobile-nav--opened");
  this.classList.add("hamburger-open");
  overlay.classList.remove("hidden");

  mobileNav.style.transform = `translateY(${
    header.getBoundingClientRect().height
  }px) translateX(0)`;
  overlay.addEventListener("click", closeMobileNav.bind(this));
  btnOpenModal.addEventListener("click", openMobileModal.bind(this));
};

const closeMobileNav = function () {
  document.body.classList.remove("mobile-nav--opened");
  this.classList.remove("hamburger-open");
  overlay.classList.add("hidden");

  mobileNav.style.transform = `translateY(${
    header.getBoundingClientRect().height
  }px) translateX(-100%)`;
  overlay.removeEventListener("click", closeMobileNav.bind(this));
  btnOpenModal.removeEventListener("click", openMobileModal.bind(this));
};

btnOpenNav.addEventListener("click", function (e) {
  if (!document.body.classList.contains("mobile-nav--opened")) {
    openMobileNav.call(btnOpenNav);
  } else {
    closeMobileNav.call(btnOpenNav);
  }
});

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", closeMobileNav.bind(btnOpenNav));
});

mobileNav.style.height = `${
  window.innerHeight - header.getBoundingClientRect().height
}px`;

mobileNav.style.transform = `translateY(${
  header.getBoundingClientRect().height
}px) translateX(-100%)`;
