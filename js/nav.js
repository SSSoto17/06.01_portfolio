// VARIABLES AND CONSTANTS

const burger = document.querySelector(".nav__burger");
const nav = document.querySelector(".nav__mobile");
const dropdown_toggle = document.querySelector(".portfolio__toggle");
const dropdown = document.querySelector(".portfolio__dropdown");

// burger menu toggle

burger.addEventListener("click", toggleBurger);

function toggleBurger() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  dropdown.classList.remove("active");
}

// portfolio dropdown toggle

dropdown_toggle.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});
