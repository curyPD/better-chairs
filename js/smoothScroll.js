// const header = document.querySelector(".header");

document.querySelectorAll("[data-section]").forEach((link) =>
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = link.dataset.section;
    if (id === "hero") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      return;
    }
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  })
);
