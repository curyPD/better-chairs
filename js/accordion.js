const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", function (e) {
  const btn = e.target.closest(".btn--icon");
  if (!btn) return;
  const blockContent = btn.closest(".block").querySelector(".block__content");

  this.querySelectorAll(".block").forEach((block) => {
    if (block === btn.closest(".block")) return;
    block.classList.add("closed");
    block.querySelector(".block__content").style.maxHeight = null;
  });

  btn.closest(".block").classList.toggle("closed");
  if (blockContent.style.maxHeight) {
    blockContent.style.maxHeight = null;
  } else {
    blockContent.style.maxHeight = blockContent.scrollHeight + "px";
  }
});
