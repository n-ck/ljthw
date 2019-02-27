const fs = require('fs');

const print_lines = (err, data) => {
	console.log(data.toString());
}

const yell_at_me = (what) => {
	return what.toUpperCase();
}

fs.readFile("test.txt", print_lines);

// let's do that again bu with an anonymous function
// you've actually seen this before

fs.readFile("test.txt", (err, data) => {
	let yelling = yell_at_me(data.toString());
	print_lines(err, yelling);
});


/* --- Creating more callback functions --- */

// add an argument with filename for the last function
let thirdfile = process.argv[2]

const filecontent = 'this is the new file\'s content'
fs.writeFile('secondfile.txt', filecontent, (err) => {
	console.log('saved second file with content')
});

const newfile = (filename, data, err) => {
	console.log('saved third file');
	return fs.writeFile(filename, data, (err));
	}

newfile(thirdfile, filecontent);