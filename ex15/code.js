let x = 20;

if (x === 10) {
	console.log("x is equal to 10:", x);
} else if (x < 10) {
	console.log("x is less than 10:", x);
} else {
	console.log("x is greater than 10:", x);
}


// consider this part a puzzle to solve
// what's the least number of times you have to change
// the code to make each console.log run?

let y = 100;

if (y == 100) {
	 if(x < 10) {
	 	console.log("log 1", x, y);
	 } else {
	 	console.log("log 2", x, y);
	 }
} else {
	if (x > 10) {
		console.log("log 3", x, y);
	} else { 
		console.log("log 4", x, y);
	}
}