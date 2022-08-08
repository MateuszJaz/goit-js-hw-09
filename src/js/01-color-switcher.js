const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
let timerId = null;
stopBtn.setAttribute("disabled", ""); // disable stopBtn at start

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
  startBtn.setAttribute("disabled", "");
  stopBtn.removeAttribute("disabled");
  console.log(`Interval with id ${timerId} has sarted!`);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  startBtn.removeAttribute("disabled");
  stopBtn.setAttribute("disabled", "");
  console.log(`Interval with id ${timerId} has stopped!`);
});
