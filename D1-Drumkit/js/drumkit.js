function playSound(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop the function from running all together
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    audio.currentTime = 0; //rewind back to start
    audio.play();

    //key.classList.contains('playing').remove('playing');
    key.classList.add('playing');
    console.log(key);
}

function removeTransform(e) {
    if (e.propertyName !== 'transform') return; //skip if not transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransform));

//listening for key down on a,s,d,f,g,h,j,k,l
window.addEventListener('keydown', playSound);