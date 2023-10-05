// Opisany w dokumentacji
import flatpickr from "flatpickr";
// Dodatkowy import stylów
import "flatpickr/dist/flatpickr.min.css";

const input = document.getElementById("datetime-picker")
const startBtn = document.querySelector("[data-start]")
const daysBox = document.querySelector("[data-days]")
const hoursBox = document.querySelector("[data-hours]")
const minutesBox = document.querySelector("[data-minutes]")
const secondsBox = document.querySelector("[data-seconds]")

let yourData
let yourTime


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        checkDate(selectedDates[0]);
    },
  };


const checkDate = (selectedDate) => {
    const now = new Date().getTime()
    yourData = selectedDate.getTime()

    if (yourData < now) {
        alert ("Please choose a date in the future")
        startBtn.setAttribute("disabled","")
    } else {
        startBtn.removeAttribute("disabled","")
    } if (yourTime > 0) {
        startBtn.setAttribute("disabled", "")

    }

    return
}

const convertMs = (ms) => {
  const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      ms = ms - new Date().getTime()
    
      // Remaining days
        const days = Math.floor(ms / day);
      // Remaining hours
        const hours = Math.floor((ms % day) / hour);
      // Remaining minutes
        const minutes = Math.floor(((ms % day) % hour) / minute);
      // Remaining seconds
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
      
        return { days, hours, minutes, seconds };
}


const dataChange = (value) => {
    time = setInterval(() => {

        daysBox.textContent = convertMs(value).days.toString().padStart(2,"0");
        hoursBox.textContent = convertMs(value).hours.toString().padStart(2,"0");
        minutesBox.textContent = convertMs(value).minutes.toString().padStart(2,"0");
        secondsBox.textContent = convertMs(value).seconds.toString().padStart(2,"0");

        if(value - new Date().getTime() < 900) {
            console.log ("Timer stop")
            clearInterval(time)
            time = 0
            startBtn.removeAttribute("disabled", "")
        }

    }, 1000)
    startBtn.setAttribute("disabled", "")
}

flatpickr(input, options)
startBtn.addEventListener("click", () => dataChange(yourData))

