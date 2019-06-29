const fs = require('fs');


let files = process.argv.slice(2);

for (let file of files) {
	try { 
		let data = fs.readFileSync(file);
		console.log(data.toString());
	} catch(err) {
		console.log(err.code, "No such file or directory");
	}	
}
