 window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

 const recognition = new SpeechRecognition();
 recognition.interimResults = true;

 let p = document.createElement('p');
 const words = document.querySelector('.words');
 words.appendChild(p);

 recognition.addEventListener('results', e => {
     console.log(e);
 });

 recognition.start();