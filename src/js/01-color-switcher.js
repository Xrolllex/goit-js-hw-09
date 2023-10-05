const startSwitcher = document.querySelector("[data-start]")
const stopSwitcher = document.querySelector("[data-stop]")
const background = document.querySelector("body")
let timer

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }


  const startColor = () => {
      timer = setInterval(() => {
        background.style.backgroundColor = getRandomHexColor()
      }, 500)

    startSwitcher.setAttribute("disabled", "")
    stopSwitcher.removeAttribute("disabled","")

    startSwitcher.removeEventListener("click", startColor)
    stopSwitcher.addEventListener("click", stopColor)
      return
    }

    const stopColor = () => {
      clearInterval(timer)

      startSwitcher.removeAttribute("disabled", "")
      stopSwitcher.setAttribute("disabled", "")

      startSwitcher.addEventListener("click", startColor)
      stopSwitcher.removeEventListener("click", stopColor)

      return
    }

    startSwitcher.addEventListener("click", startColor)