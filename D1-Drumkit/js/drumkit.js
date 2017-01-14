window.addEventListener('keydown', function(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop the function from running all together
    audio.play();
});