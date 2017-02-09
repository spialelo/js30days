const divs = document.querySelectorAll('div');
const button = document.querySelector('button');


function logText(e) {
    console.log(this.classList.value);
    e.stopPropagation(); //stop bubbling
}

/* Knew this off the top of my head. JS30 days has stuck and it was a good idea to take a day or two off. */
divs.forEach(div => div.addEventListener('click', logText, { capture: false }));

/* Using once, fires all the events but only once when the button is clicked*/
button.addEventListener('click', () => {
    console.log('You clicked!!!');
}, { once: true });