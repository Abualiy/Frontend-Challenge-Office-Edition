export const navigator = (
  btn,
  btn2,
  btn3,
  btn4,
  container,
  container2,
  container3,
  container4
) => {
  btn.addEventListener("click", () => {
    btn.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");

    container.classList.add("active");
    container2.classList.remove("active");
    container3.classList.remove("active");
    container4.classList.remove("active");
  });

   btn2.addEventListener("click", () => {
    btn.classList.remove("active");
    btn2.classList.add("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");

    container.classList.remove("active");
    container2.classList.add("active");
    container3.classList.remove("active");
    container4.classList.remove("active");
  });

  btn3.addEventListener("click", () => {
    btn.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.add("active");
    btn4.classList.remove("active");

    container.classList.remove("active");
    container2.classList.remove("active");
    container3.classList.add("active");
    container4.classList.remove("active");
  });

  btn4.addEventListener("click", () => {
    btn.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.add("active");

    container.classList.remove("active");
    container2.classList.remove("active");
    container3.classList.remove("active");
    container4.classList.add("active");
  });
};
