const canvas = document.querySelector('#draw');

const ctx = canvas.getContext('2d');


/*resize canvas to the size of the window*/
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


ctx.strokeStyle = '#BADA55'; /*color of line*/
ctx.lineJoin = 'round'; /*shape of brush*/
ctx.lineCap = 'round';
ctx.lineWidth = 100;
ctx.globalCompositeOperation = 'exclusion';



let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if (!isDrawing) return; //stop function from running when they are not holding the mouse down

    //console.log(e);
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    ctx.beginPath(); //start drawing
    ctx.moveTo(lastX, lastY); //the end
    ctx.lineTo(e.offsetX, e.offsetY); //location of cursor
    ctx.stroke(); //makes line visible

    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;

    /*changing the hsl. once it hits 361, it gets reset to 0*/
    if (hue >= 360) {
        hue = 0;
    }

    /*if the width is greater than 100 or less than one, direction is set false*/
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }

    /*direction true - width increase, false - width decreases*/
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }


}


function clearCanvas(e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
}

let clrBtn = document.getElementById('clearBtn');

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
clrBtn.addEventListener('click', clearCanvas);