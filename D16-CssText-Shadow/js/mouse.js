const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

const walk = 100; //100px


function shadow(e) {
    //width and height of hero
    //const width = hero.offsetWidth;
    //const height = hero.offsetHeight;

    //destructuring versiom
    const { offsetWidth: width, offsetHeight: height } = hero;

    let { offsetX: x, offsetY: y } = e;

    //this is the div with hero class and the target is the h1 tag
    //console.log(this, e.target);
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;

    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(0, 0, 0, 0.5),
    ${xWalk *-1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
    ${yWalk}px ${xWalk *-1}px 0 rgba(0, 255, 0, 0.5),
    ${yWalk *-1}px ${xWalk}px 0 rgba(0, 0, 255, 0.5)
    `;
    //console.log(xWalk, yWalk);

}

hero.addEventListener('mousemove', shadow);