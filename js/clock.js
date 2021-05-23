const clockContatiner = document.querySelector(".js-clock"),
  clockTitle = clockContatiner.querySelector("span");

function getTime() {
  const date = new Date(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds();

  clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour}:${
    minute < 10 ? `0${minute}` : minute
  }`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
