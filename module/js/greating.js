export const getGreeting = (name, tag) => {
  const hour = new Date().getHours();

  if (hour < 12) {
    tag.innerHTML = `🌅 Good Morning! ${name.split(' ')[0]}`;
  } else if (hour < 17) {
    tag.innerHTML = `🌞 Good afternoon! ${name.split(' ')[0]}`;
  } else if (hour < 21) {
    tag.innerHTML = `🌇 Good evening ${name.split(' ')[0]}`;
  } else {
    tag.innerHTML = `🌙 Good night ${name.split(' ')[0]}`;
  }
};
