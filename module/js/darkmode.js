// module/js/darkmode.js
export const darkmode = (btn, mode) => {
  const enableDarkmode = () => {
    document.body.classList.add("dark_mode");
    localStorage.setItem("darkmode", "active");
    btn.checked = true;
  };

  const disableDarkmode = () => {
    document.body.classList.remove("dark_mode");
    localStorage.setItem("darkmode", "inactive");
    btn.checked = false;
  };


  if (mode === "active") {
    enableDarkmode();
  } else {
    disableDarkmode();
  }

  btn.addEventListener("change", () => {
    const currentMode = localStorage.getItem("darkmode");
    currentMode !== "active" ? enableDarkmode() : disableDarkmode();
  });
};
