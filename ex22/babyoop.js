const Person = (name, age, eyes) => {
	let obj = {
		name: name,
		age: age,
		eyes: eyes
	}
	
	obj.talk = (words) => {
		console.log(`I am ${obj.name} and ${words}.`);
	}
	
	return obj;
}



let alex = Person("Alex", 16, "green");
let mary = Person("Mary", 44, "brown");
let frank = Person("Frank", 34, "blue");

frank.talk("I am talking here!");
mary.talk("these are some words");
alex.talk("Hi there!");

console.log(`Frank is ${frank.age}, Mary is ${mary.age}, Alex is ${alex.age}`);

