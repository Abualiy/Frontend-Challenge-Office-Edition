import { darkmode } from "./module/js/darkmode.js";
import { getGreeting } from "./module/js/greating.js";
import { slider } from "./module/js/slider.js";

// loading page js
// window.addEventListener("load", () => {
//   const splash = document.getElementById("loader");
//   const main = document.getElementById("main-content");

//   // Wait 5 seconds, then hide loader and show main content
//   setTimeout(() => {
//     splash.style.display = "none";
//     main.classList.remove("hidden");
//   }, 5000);
// });

window.addEventListener("DOMContentLoaded", () => {
  // dark_mode switch button
  const themeSwitch = document.getElementById("theme_switch");
  const savedMode = localStorage.getItem("darkmode");

  if (themeSwitch) {
    darkmode(themeSwitch, savedMode);
  } else {
    console.error("Dark mode toggle not found!");
  }

  //   grating text based on time
  const greeting = document.getElementById("greeting");
  const userName = "Johan Tomsen";

  getGreeting(userName, greeting)

// script for announcement slide

const slides = document.querySelectorAll(".announcement-slide");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

slider(slides, prevBtn, nextBtn)

});





