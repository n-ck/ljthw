class Person {
	constructor (name, age, eyes) {
		this.name = name;
		this.age = age;
		this.eyes = eyes;
	}
	
	talk(words) {
		console.log(`I am ${this.name} and ${words}.`);
	}
}

let alex = new Person("Alex", 16, "green");
let mary = new Person("Mary", 44, "brown");
let frank = new Person("Frank", 34, "blue");

frank.talk("I am talking here!");
mary.talk("these are some words");
alex.talk("Hi there!");

console.log(`Frank is ${frank.age}, Mary is ${mary.age}, Alex is ${alex.age}`);
