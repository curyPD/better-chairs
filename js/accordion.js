const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", function (e) {
  const btn = e.target.closest(".btn--icon");
  if (!btn) return;

  this.querySelectorAll(".block").forEach((block) => {
    if (block === btn.closest(".block")) return;
    block.classList.add("hidden");
  });

  btn.closest(".block").classList.toggle("hidden");
});
