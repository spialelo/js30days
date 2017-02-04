const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;


function populateVoices() {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
        .filter(voice => voice.lang.includes('en')) /* Filters on English only voices */
        .map(voice => `<option value="${voice.name}">${voice.name} ${voice.lang}</option>`)
        .join(''); /*Maps through the array to create the option elements and then make them a string, before passing the html to the voicesDropdown */

}

function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value); /* Sets the voice the drop down changed to, to the voice speech synthesis will use */
    toggleVoice();
    //console.log(`${this.value}`);
}


function toggleVoice(startOver = true) {
    speechSynthesis.cancel();
    if (startOver) {
        speechSynthesis.speak(msg);
    }
} /* Toggles starting and stopping the voice. */


function setOption() {
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggleVoice();
}
/*Sets the msg property to the value that it corresponds to. */


speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
speakButton.addEventListener('click', toggleVoice);
stopButton.addEventListener('click', toggleVoice.bind(null, false));
/*Bind: Call a function, pass it this which is null, and pass it an argument that is false */

/* Add event listener to listen for change on each of the input areas*/
options.forEach(option => option.addEventListener('change', setOption));
//.addEventListener();