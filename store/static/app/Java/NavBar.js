// Java Script starting from there

const bars = document.querySelector(".menu-bar");
const menu = document.querySelector(".items");
const search_icon = document.querySelector(".search-icon");
const search_form = document.querySelector("form");
const logo = document.querySelector(".logo");

bars.addEventListener("click", () => {
  menu.classList.toggle("open");
});

search_icon.addEventListener("click", () => {
  logo.classList.toggle("open");
  search_form.classList.toggle("open");
});
