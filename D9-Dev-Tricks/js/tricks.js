'use strict'; //trying to use this when i can to get more practice with it

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {

    const p = document.querySelector('p');

    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
    console.log(p);
}

var pGreen = document.getElementById('beGreen');
pGreen.addEventListener('click', makeGreen);

const btn = document.querySelector('button');

function clearConsole() {
    console.clear();
}
btn.addEventListener('click', clearConsole);

//regular
console.log('hello world');

//interpolated - worked on Wes Bos computer but not in codepen.
console.log('Hello World %s !', '💩');

//style
console.log('%cHello World at 15px', 'font-size:15px');

//warning!
console.warn('Watch out!');

//error :(
console.error('I told you to watch out: Error code ####');

//info
console.info('The Punisher is coming to Netflix. And Iron Fist. And the Defenders!');

//testing
console.assert(1 == 2, "That is wrong."); //assert will print when the test case is false
//test if an element contains a class
console.assert(pGreen.classList.contains('sub-copy'), 'Does not contain this class.');

//clearing console
//console.clear();

//view DOM elements
console.dir(pGreen);

//grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`); //console.group - expanded
    console.log(`This is ${dog.name}.`);
    console.log(`${dog.name} is ${dog.age} in human years.`);
    console.log(`${dog.name} is ${dog.age*7} years old.`);
    console.groupEnd(`${dog.name}`);
});


//counting
console.count('Nicole');
console.count('Nicole');
console.count('DC');
console.count('DC');
console.count('Nicole');

//timing - get the time it takes to the a task. start a timer | look into performance.now()
console.time('fetching data');
fetch('https://api.github.com/users/spialelo')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });



console.table(dogs);