

const startSwitcher = document.querySelector("data-start")
const stopSwitcher = document.querySelector("data-stop")

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  