let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
// let seconds = minutes * 60;


function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        //check if we should stop it
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        //display it
        displayTimeLeft(secondsLeft);
    }, 1000);
}


function displayTimeLeft(seconds) {
    const minute = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minute}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
}


function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${hour}:${minutes < 10 ? '0' : '' }${minutes}`;
    /*For non-24 hour: ${hour > 12 ? hour - 12 : hour} */
}


function startTime() {
    console.log(this);
}

buttons.forEach(button => button.addEventListener('click', startTime));