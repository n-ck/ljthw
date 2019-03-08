const Person = (name, age, eyes) => {
	// this makes an obj for the data
	let obj = {
		name: name,
		age: age,
		eyes: eyes
	}
	
	// then attach our function to it
	obj.talk = (words) => {
		// collest part is obj here will keep a reference
		console.log(`I am ${obj.name} and ${words}.`);
	}
	
	// and return our new person
	return obj;
}


// Create a new person:
let alex = Person("Alex", 16, "green");

alex.talk("Hi there!");
