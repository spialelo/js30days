const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixNav() {
    console.log(topOfNav);
}

window.addEventListener('scroll', fixNav);