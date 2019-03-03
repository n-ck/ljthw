let pigments = ["perinone", "cadmium", "titanium", "ultramarine", "napthol"];

let i = 0;
// you've seen this already
while(i < pigments.length) {
	console.log(`while ${i}=${pigments[i]}`);
	i++;
}

// you can do the above in on emove like this

for(let i = 0; i < pigments.length; i++) {
	console.log(`for ${i}=${pigments[i]}`)
}

// but this is the easiest of all
for(paint of pigments) {
	console.log(`for-in ${paint}`);
}

// break & continue

let count = 5;
label1:
while(count > 0) {
	console.log("in while", count);
	if(count > 2) {
		for (i = 0; i < 4; i++) {
			console.log("in for", i);
			if(i == 2) {
				count--;
				continue label1;
			}
		}
	} else if(count == 2) {
		count -= 2;
		console.log("continue in while");
		continue label1;
	} else {
		break;
	}
	
	count --;
}

label2:
console.log("Done.");