// VARIABLES AND CONSTANTS

const portfolio = document.querySelector("#portfolio_container");
const prev = portfolio.querySelector(".carousel__button--prev");
const next = portfolio.querySelector(".carousel__button--next");

const icon_web = document.querySelector(".fa-code");
const icon_ui = document.querySelector(".fa-pen-nib");
const icon_ani = document.querySelector(".fa-arrows-rotate");
const icon_con = document.querySelector(".fa-folder-open");

const web = document.querySelector(".web");
const ui = document.querySelector(".ui");
const ani = document.querySelector(".animation");
const con = document.querySelector(".content");

let activeTab;
let pages;
let currentPage;

function resetClass() {
  icon_web.classList.remove("active");
  web.classList.remove("active");
  icon_ui.classList.remove("active");
  ui.classList.remove("active");
  icon_ani.classList.remove("active");
  ani.classList.remove("active");
  icon_con.classList.remove("active");
  con.classList.remove("active");
}

function resetPage() {
  currentPage = 0;
  pages = activeTab.querySelectorAll(".flex_pages li");
  prev.classList.add("inactive");
  if (pages.length > 0) {
    next.classList.remove("inactive");
    pages[currentPage].scrollIntoView();
  } else {
    next.classList.add("inactive");
  }
}

// load in portfolio

window.addEventListener("load", () => {
  resetClass();
  icon_web.classList.add("active");
  web.classList.add("active");
  activeTab = web;
  resetPage();
});

next.addEventListener("click", () => {
  currentPage++;
  if (currentPage > 0) {
    prev.classList.remove("inactive");
  }
  if (currentPage == pages.length - 1) {
    next.classList.add("inactive");
  }
  pages[currentPage].scrollIntoView();
});

prev.addEventListener("click", () => {
  console.log(currentPage);
  currentPage--;
  console.log(currentPage);
  if (currentPage >= 0) {
    next.classList.remove("inactive");
  }
  if (currentPage == 0) {
    prev.classList.add("inactive");
  }
  pages[currentPage].scrollIntoView();
});

// click on icons

icon_web.addEventListener("click", () => {
  resetClass();
  icon_web.classList.add("active");
  web.classList.add("active");
  activeTab = web;
  resetPage();
});

icon_ui.addEventListener("click", () => {
  resetClass();
  icon_ui.classList.add("active");
  ui.classList.add("active");
  activeTab = ui;
  resetPage();
});

icon_ani.addEventListener("click", () => {
  resetClass();
  icon_ani.classList.add("active");
  ani.classList.add("active");
  activeTab = ani;
  resetPage();
});

icon_con.addEventListener("click", () => {
  resetClass();
  icon_con.classList.add("active");
  con.classList.add("active");
  activeTab = con;
  resetPage();
});
