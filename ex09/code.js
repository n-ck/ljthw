// https://nodejs.org/api/fs.html

const fs = require("fs");

let contents = fs.readFileSync("test.txt");

console.log("Contents:");
console.log(contents.toString());

// using a callback

console.log("-----------")

fs.readFile("test.txt", (err, data) => {
	console.log(err.toString());
	console.log(data.toString());
});

