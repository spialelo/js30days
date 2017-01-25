const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');


function shadow(e) {
    //width and height of hero
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;

    //destructuring versiom
    //const {offsetWidth: width, offsetHeight: height} = hero;

    let { offsetX: x, offsetY: y } = e;

    //this is the div with hero class and the target is the h1 tag

}

hero.addEventListener('mousemove', shadow);