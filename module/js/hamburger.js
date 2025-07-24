export const hamburger = (menuBtn, menu) => {
  let status = false;
  let isClick = false;

  const enableMenu = () => {
    menu.classList.add("show");
    status = true;
  };

  const disableMenu = () => {
    menu.classList.remove("show");
    status = false;
  };
  if (menuBtn.value === "checkbox") {
  menuBtn.addEventListener("change", () => {
    if (!status) {
      enableMenu();
    } else {
      disableMenu();
    }

  });

  } else {
    menuBtn.addEventListener("click", () => {
      if (!status) {
        enableMenu();
      } else {
        disableMenu();
      }
    });
  }
};
