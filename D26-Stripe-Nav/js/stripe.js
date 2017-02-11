const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
    console.log('Enter');
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.add('trigger-enter-active'), 150);
    background.classList.add('open');


    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width
    };

    const nvCoords = {
        left: navCoords.left,
        top: navCoords.top
    };


    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('left', `${nvCoords.left}px`);
    background.style.setProperty('top', `${nvCoords.top}px`);

}

function handleLeave() {
    console.log('Leave');
    this.classList.remove('trigger-enter');
    setTimeout(() => this.classList.remove('trigger-enter-active'), 150);
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));