let count = 5;

while(count > 0) {
	console.log(`count down ${count}`);
	count--;
}

// what value is count right here?

while(count < 10) {
	if(count % 2 == 0) {
		console.log(count, "EVEN");
	} else {
		console.log(count, "ODD");
	}
	
	count++;
	
}
