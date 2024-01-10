// VARIABLES AND CONSTANTS

const prev = document.querySelector("#portfolio_container .carousel__button--prev");
const next = document.querySelector("#portfolio_container .carousel__button--next");

const icon_web = document.querySelector("aside .fa-code");
const icon_ui = document.querySelector("aside .fa-pen-nib");
const icon_ani = document.querySelector("aside .fa-arrows-rotate");
const icon_con = document.querySelector("aside .fa-folder-open");

const dropdown_web = document.querySelector(".dropdown_web");
const dropdown_ui = document.querySelector(".dropdown_ui");
const dropdown_ani = document.querySelector(".dropdown_ani");
const dropdown_con = document.querySelector(".dropdown_con");

const web = document.querySelector("#web");
const ui = document.querySelector("#ui");
const ani = document.querySelector("#animation");
const con = document.querySelector("#content");

let activeTab;
let pages;
let currentPage;

// functions

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

function gotoTab(...params) {
  let page = params[0];
  let icon = params[1];
  resetClass();
  icon.classList.add("active");
  page.classList.add("active");
  activeTab = page;
  resetPage();
  toggleBurger();
}

// load in portfolio;

window.addEventListener("load", () => {
  resetClass();
  if (location.hash == "#ui") {
    icon_ui.classList.add("active");
    ui.classList.add("active");
    activeTab = ui;
  } else if (location.hash == "#animation") {
    icon_ani.classList.add("active");
    ani.classList.add("active");
    activeTab = ani;
  } else if (location.hash == "#content") {
    icon_con.classList.add("active");
    con.classList.add("active");
    activeTab = con;
  } else {
    icon_web.classList.add("active");
    web.classList.add("active");
    activeTab = web;
  }
  resetPage();
});

// aside navigation

icon_web.addEventListener("click", gotoTab.bind(null, web, icon_web));
icon_ui.addEventListener("click", gotoTab.bind(null, ui, icon_ui));
icon_ani.addEventListener("click", gotoTab.bind(null, ani, icon_ani));
icon_con.addEventListener("click", gotoTab.bind(null, con, icon_con));

// mobile navigation

dropdown_web.addEventListener("click", gotoTab.bind(null, web, icon_web));
dropdown_ui.addEventListener("click", gotoTab.bind(null, ui, icon_ui));
dropdown_ani.addEventListener("click", gotoTab.bind(null, ani, icon_ani));
dropdown_con.addEventListener("click", gotoTab.bind(null, con, icon_con));

// shift between pages

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
  currentPage--;
  if (currentPage >= 0) {
    next.classList.remove("inactive");
  }
  if (currentPage == 0) {
    prev.classList.add("inactive");
  }
  pages[currentPage].scrollIntoView();
});
