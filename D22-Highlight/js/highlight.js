const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
    const linkCoords = this.getBoundingClientRect();

    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY, //document.body.scrollTop, if on codepen
        left: linkCoords.left + window.scrollX //document.body.scrollLeft, if on codepen
    };

    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    //console.log('highlight');
    //console.log(document.body.scrollTop, document.body.scrollLeft);
}


triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));