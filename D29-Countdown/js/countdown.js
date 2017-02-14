let countdown;
const timerDisplay = document.querySelector('.display__time-left');
// const minutes = document.querySelector('input').value;

// let seconds = minutes * 60;


function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);

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
}