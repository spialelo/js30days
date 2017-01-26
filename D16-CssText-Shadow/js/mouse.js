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
    //console.log(this, e.target);
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;

    }

    console.log(x, y);

}

hero.addEventListener('mousemove', shadow);