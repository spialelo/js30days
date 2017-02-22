const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

//gets the video
function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            console.log(localMediaStream);
            video.src = window.URL.createObjectURL(localMediaStream);
            video.play();
        })
        .catch(err => {
            console.error('Please allow the web cam, pretty please.', err);
        });
}

//paints the video to the canvas
function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        //do more research into canvas!!! fun!!!
        //take pixels out
        let pixels = ctx.getImageData(0, 0, width, height);
        //alter the pixels
        // pixels = redEffect(pixels);
        pixels = greenScreen(pixels);
        //then put pixels back
        ctx.putImageData(pixels, 0, 0);
    }, 16);

}

//takes photo
function takePhoto() {
    //played the sound of a photo taking
    snap.currentTime = 0;
    snap.play();

    //now need to take the data out
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'bonita');
    // link.textContent = 'Download Image';
    link.innerHTML = `<img src="${data}" alt="Bonita Mujer">`;
    strip.insertBefore(link, strip.firstChild);
    console.log(data);

}


//red effect
function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 200; //red
        pixels.data[i + 1] = pixels.data[i + 1] - 50; //green
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; //blue
    }

    return pixels;
}


//rgsplit effect
function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0]; //red
        pixels.data[i + 100] = pixels.data[i + 1]; //green
        pixels.data[i - 550] = pixels.data[i + 2]; //blue
    }

    return pixels;
}


//green screen effect
function greenScreen(pixels) {
    const levels = {};

    //all the sliders
    document.querySelectorAll('.rgb input').forEach((input) => {
        levels[input.name] = input.value;
    });

    for (i = 0; i < pixels.data.length; i = i + 4) {
        red = pixels.data[i + 0];
        green = pixels.data[i + 1];
        blue = pixels.data[i + 2];
        alpha = pixels.data[i + 3];

        if (red >= levels.rmin &&
            green >= levels.gmin &&
            blue >= levels.bmin &&
            red <= levels.rmax &&
            green <= levels.gmax &&
            blue <= levels.bmax) {
            // take it out!
            pixels.data[i + 3] = 0;
        }
    }

    return pixels;

}

//will make more filters later- purple one, aqua/turqouise???


getVideo();

video.addEventListener('canplay', paintToCanvas);