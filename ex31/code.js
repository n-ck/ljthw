
// To-Do list:
// Read command-line args example
// Get a first command line arg to work in js file
// Expirement with more difficult commandl ine args

// Documentation: https://github.com/75lb/command-line-args


// import command-line-args
const commandLineArgs = require('command-line-args');

// make option object
const myfirstargs = [
    { name: 'name', alias: 'n', type: String },
    { name: 'age', alias: 'a', type: Number },
    { name: 'gender', alias: 'g', type: Boolean }

]

// set the options
const person = commandLineArgs(myfirstargs)

// node code.js --name=Nick
// or: node.code.js -n Nick

console.log(`My name is: ${person['name']}`);
console.log(`I am ${person['age']} old`);

if (person['gender'] === true) {
    let gender = "male";
    console.log(`I am a ${gender}`);
} else {
    let gender = "female";
    console.log(`I am a ${gender}`);
}