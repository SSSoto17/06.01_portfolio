// VARIABLES AND CONSTANTS

const carousel = document.querySelector(".carousel__track-container");
const carouselSlides = carousel.querySelectorAll("li");

const slideCount = carouselSlides.length;
let activeSlide = 0;

const nextButton = document.querySelector(".carousel__button--next");
const prevButton = document.querySelector(".carousel__button--prev");

// load in first slide

window.addEventListener("load", () => {
  carouselSlides[0].classList.add("active");
});

// move to next slide

nextButton.addEventListener("click", () => {
  console.log("Next");
  carouselSlides[activeSlide].classList.remove("active");
  activeSlide++;
  if (activeSlide == slideCount) {
    activeSlide = 0;
  }
  carouselSlides[activeSlide].classList.add("active");
});

// move to previous slide

prevButton.addEventListener("click", () => {
  console.log(activeSlide);
  carouselSlides[activeSlide].classList.remove("active");
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = 3;
  }
  console.log(activeSlide);
  carouselSlides[activeSlide].classList.add("active");
});

// automatic slide

setInterval(() => {
  carouselSlides[activeSlide].classList.remove("active");
  activeSlide++;
  if (activeSlide == slideCount) {
    activeSlide = 0;
  }
  carouselSlides[activeSlide].classList.add("active");
}, 5000);
