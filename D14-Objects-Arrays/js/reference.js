//working with Strings
let age = 100;
let age2 = age;

console.log(age, age2);
//prints 100, 100

age = 200;
console.log(age, age2);
//prints 200, 100

let name = 'Nicole';
let name2 = name;

console.log(name, name2);
//prints Nicole, Nicole

name = 'Nick';
console.log(name, name2);
//prints Nick, Nicole

//Let xyz is a copy of the variable abc

//working with Arrays

//beginning array
const players = ['Nicole', 'Shawn', 'Lorraine', 'Ramoun', 'Sade'];

//make a copy of players
const team = players;

console.log(players, team);

//team[1] = 'Stephan';

//console.log(players, team);
//turns out team is a reference to players. once players is updated, it is reflected in team


// So, how do we fix this? We take a copy instead!
const team2 = players.slice();

//concat players array into a new array
const team3 = [].concat(players);

//ES6 way
const team4 = [...players];
team4[3] = 'Barbados';
console.log(team4);


const team5 = Array.from(players);


//with objects
const person = {
    name: 'Nicole Phillips',
    age: 30
};

//not making a copy, but actually a reference like with Arrays
// const captain = person;
// captain.number = 99;
// console.log(captain);
//making a copy - use object dot assign
const cap2 = Object.assign({}, person, { number: 99, age: 12 });

console.log(cap2);


//object spread?! - note: will only go one level deep
// const cap3 = {...person };


const nicole = {
    name: 'Nicole',
    age: 25,
    social: {
        twitter: '@nicolephillips',
        github: 'spialelo'
    }
}

console.clear();
console.log(nicole);

const dev = Object.assign({}, nicole);
console.log(dev);
//only one level deep, the name. however the others will be updated to whatever you change them to in the second reference
//look into clone deep. may not need it but nice to know about it

//another way. I don't believe Wes recommends it but he calls it the poor man's deep clone.
const dev2 = JSON.parse(JSON.stringify(nicole));
//make the object a string, then back to an object, and save it into a const variable.