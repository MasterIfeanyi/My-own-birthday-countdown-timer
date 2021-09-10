const timeLeft = document.querySelector("#time-left");
let birthday = new Date(2022, 05, 24)
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let timerId;

const daysElement = document.querySelector(".days")
const hoursElement = document.querySelector(".hours")
const minutesElement = document.querySelector(".minutes")
const secondsElement = document.querySelector(".seconds")

const ourForm = document.querySelector(".our-form")
const ourField = document.querySelector(".our-field")

const yourBirthday = document.querySelector(".birthDay")
let dDay;

let dateParsed;



function countDown() {
    const today = new Date()
    const timeSpan = birthday - today;
    // console.log(timeSpan)

    if (timeSpan <= -day) {
        timeLeft.innerText = "Hope You had a good day!!"
        clearInterval(timerId)
        return
    }       
    
    if (timeSpan === 0) {
        timeLeft.innerText = "Happy Birthday!!!"
        clearInterval(timerId)
        return
    }


    const days = Math.floor(timeSpan / day);

    const hours = Math.floor((timeSpan % day) / hour);
    
    const minutes = Math.floor((timeSpan % hour) / minute);

    const seconds = Math.floor((timeSpan % minute) / second);

    daysElement.innerText = days + ` days `;
    hoursElement.innerText = "  " + hours + ` hours` + " ";
    minutesElement.innerText = " " + minutes + ` minutes` + " ";
    secondsElement.innerText = " "+ seconds + ` seconds`;


}

timerId = setInterval(countDown, 1000);

ourForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    dateParsed = Date.parse(ourField.value);

    var newDate = new Date(dateParsed);

    // birthday.setDate(newDate);
    birthday = newDate;

    console.log(birthday);

    // dDay = newDate.toDateString

    yourBirthday.innerText = `Your Birthday is on ${newDate.toDateString()}`;

}