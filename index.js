const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileNav.classList.toggle("display");
  document.body.classList.toggle("overflow-hidden");
});

document.addEventListener("click", (e) => {
  if (e.target.parentElement.classList.contains("mobile-lnks")) {
    hamburger.classList.toggle("open");
    mobileNav.classList.toggle("display");
    document.body.classList.toggle("overflow-hidden");
  }
});
