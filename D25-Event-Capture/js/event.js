const divs = document.querySelectorAll('div');

function logText(e) {
    console.log(this.classList.value);
}

/* Knew this off the top of my head. JS30 days has stuck and it was a good idea to take a day or two off. */
divs.forEach(div => div.addEventListener('click', logText));