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