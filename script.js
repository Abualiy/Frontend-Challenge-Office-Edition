import { achievementChart } from "./module/js/achievementChart.js";
import { darkmode } from "./module/js/darkmode.js";
import { getGreeting } from "./module/js/greating.js";
import { hamburger } from "./module/js/hamburger.js";
import { navigator } from "./module/js/navigator.js";
import { pomodoro } from "./module/js/pomodoro.js";
import { quoteTip } from "./module/js/quoteTip.js";
import { radio } from "./module/js/radio.js";
import { slider } from "./module/js/slider.js";
import { taskProgress } from "./module/js/taskProgress.js";
import { toDo } from "./module/js/toDo.js";
import { vibePoll } from "./module/js/vibePoll.js";

// loading page js
window.addEventListener("load", () => {
  const splash = document.getElementById("loader");
  const main = document.getElementById("main-content");
  const time_widget = document.getElementById("time-widget");

  // Wait 5 seconds, then hide loader and show main content
  setTimeout(() => {
    splash.style.display = "none";
    main.classList.remove("hidden");
    time_widget.classList.remove("hidden");
  }, 3000);
});

// timeer
const timeEl = document.getElementById("time");
const dateDayEl = document.getElementById("date");

const updateTime = () => {
  const now = new Date();
  let hours = now.getHours();
  const mins = now.getMinutes().toString().padStart(2, "0");
  const sec = now.getSeconds().toString().padStart(2, "0");

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 becomes 12

  const timeStr = `${hours.toString().padStart(2, "0")}:${mins}:${sec} ${ampm}`;
  timeEl.textContent = timeStr;

  const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
  const formattedDate = now.toLocaleDateString();
  dateDayEl.textContent = `${days[now.getDay()]}, ${formattedDate}`;
};

setInterval(updateTime, 1000);
updateTime();

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

  getGreeting(userName, greeting);

  // main
  // navigator
  const overviewBtn = document.getElementById("overviewBtn");
  const tasksBtn = document.getElementById("tasksBtn");
  const communicationBtn = document.getElementById("communicationBtn");
  const wellnessBtn = document.getElementById("wellnessBtn");

  const overview = document.getElementById("overview");
  const tasks = document.getElementById("tasks");
  const communication = document.getElementById("communication");
  const wellness = document.getElementById("wellness");

  navigator(
    overviewBtn,
    tasksBtn,
    communicationBtn,
    wellnessBtn,
    overview,
    tasks,
    communication,
    wellness
  );

  // script for announcement slide

  const slides = document.querySelectorAll(".announcement-slide");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  slider(slides, prevBtn, nextBtn);

  // dev highlight slide
  const slidesDev = document.querySelectorAll(".highlight-card ");
  const prevBtnDev = document.getElementById("prev_dev");
  const nextBtnDev = document.getElementById("next_dev");

  slider(slidesDev, prevBtnDev, nextBtnDev);
});

// hamburger menu
const menuBtn = document.getElementById("menu_checkbox");
const menu = document.getElementById("menu");
hamburger(menuBtn, menu);

// right side mobile view 
const sideBtn = document.getElementById("sideBtn")
const right_side = document.getElementById("right_side")
const side_menu = document.getElementById("side_menu")

hamburger(sideBtn, right_side)
hamburger(sideBtn, side_menu)

// weekly achievement chart
achievementChart();

// task progress
taskProgress();

// to-do list
toDo();

// vibe poll
vibePoll();

// ==== QUOTE ====
quoteTip();

// ==== POMODORO ====
pomodoro();

// office radio
radio();
