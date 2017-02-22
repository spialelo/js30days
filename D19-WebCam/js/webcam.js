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
        const pixels = ctx.getImageData(0, 0, width, height);
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


getVideo();

video.addEventListener('canplay', paintToCanvas);