// VARIABLES AND CONSTANTS

const icon_web = document.querySelector(".fa-code");
const icon_ui = document.querySelector(".fa-pen-nib");
const icon_ani = document.querySelector(".fa-arrows-rotate");
const icon_con = document.querySelector(".fa-folder-open");

const web = document.querySelector(".web");
const ui = document.querySelector(".ui");
const ani = document.querySelector(".animation");
const con = document.querySelector(".content");

// click on icons

icon_web.addEventListener("click", () => {
  console.log("Web");

  //   clear all
  web.classList.remove("active");
  ui.classList.remove("active");
  ani.classList.remove("active");
  con.classList.remove("active");

  //   display web
  web.classList.add("active");
});

icon_ui.addEventListener("click", () => {
  console.log("UI");

  //   clear all
  web.classList.remove("active");
  ui.classList.remove("active");
  ani.classList.remove("active");
  con.classList.remove("active");

  //   display ui
  ui.classList.add("active");
});

icon_ani.addEventListener("click", () => {
  console.log("Animation");

  //   clear all
  web.classList.remove("active");
  ui.classList.remove("active");
  ani.classList.remove("active");
  con.classList.remove("active");

  //   display animation
  ani.classList.add("active");
});

icon_con.addEventListener("click", () => {
  console.log("Content");

  //   clear all
  web.classList.remove("active");
  ui.classList.remove("active");
  ani.classList.remove("active");
  con.classList.remove("active");

  //   display animation
  con.classList.add("active");
});
