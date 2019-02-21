// REQUIRES: npm install readline-sync

const readline = require('readline-sync')

let name = readline.question("What's your name? ");
let age = readline.question("What's your age? ");
let eyes = readline.question("What's your eye color? ");

console.log(`Your name is ${name}`);
console.log(`Your age is ${age}`);
console.log(`Your eyes are ${eyes}`);