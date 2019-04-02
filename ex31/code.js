
// To-Do list:
// Read command-line args example
// Get a first command line arg to work in js file
// Expirement with more difficult commandl ine args


// import command-line-args
const commandLineArgs = require('command-line-args');

// make option object
const myfirstargs = [
    { name: 'name', alias: 'n', type: String }
]

// set the options
const printname = commandLineArgs(myfirstargs)

// node code.js --name=Nick
// or: node.code.js -n Nick
console.log(`My first command line arg: ${printname['name']}`);