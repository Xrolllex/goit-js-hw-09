const input = document.querySelectorAll("input")
const createBtn = document.querySelector("button")
let timer

const createPromise = (position, delay) => {
  const shouldResolve = Math.random() > 0.3
  if (shouldResolve) {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}

const task = event => {
  event.preventDefault()
  let meter = 1
  let delay = Number(input[0].value)

  setTimeout(() => {
    createPromise(meter,delay)
    timer = setInterval(() => {
    meter ++
    delay += Number(input[1].value)

    createPromise(meter,delay)
    if (meter > Number(input[2].value) - 1 ){
      clearInterval(timer)
      }

    },input[1].value)

  },input[0].value)
}

createBtn.addEventListener("click", task)