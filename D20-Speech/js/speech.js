window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('results', e => {

    const transcript = Array.from(e.results)
        .map(results => result[0])
        .map(result => result.transcript)
        .join('');

    // p.textContent = transcript;

    const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
    p.textContent = poopScript;

    if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }

});


recognition.addEventListener('end', recognition.start);

recognition.start();

/*
There is something wrong with Speech recognition on my computer. I was able to npm install the package.json file and to start the browsersync. However, no matter how I tried it refused to pick up my voice on the headset. Strangely my laptop and the other tabs I had opened, acknowledged my voice and commands.
*/