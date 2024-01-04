// VARIABLES AND CONSTANTS

const burger = document.querySelector(".nav__burger");
const nav = document.querySelector(".nav__mobile");

// burger menu toggle

burger.addEventListener("click", () => {
  console.log("Burger");
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});
