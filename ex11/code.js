const printPerson = (name, age) => {
	console.log(`Hi ${name}, you are ${age}`);
}

printPerson('Zed', 44);
printPerson('Fran', 100);
printPerson('Alex', 30);
printPerson('Eve', 35);

console.log('---------- pets ----------');

const printPet = (owner_name, owner_age, pet_name, pet_age) => {
	printPerson(owner_name, owner_age);
	console.log(`That person owns ${pet_name} who is ${pet_age}`);
}

printPet('Zed', 44, 'Mr. Scruffles', 10);
printPet('Fran', 100, 'Crazy', 2);
printPet('Alex', 30, 'Lizzy Lizard', 1);
printPet('Eve', 35, 'Kong The Donkey', 20);

console.log('---------- callback style ----------');

const fancyPet = (owner_name, owner_age, pet_name, pet_age, cb) => {
	cb(owner_name, owner_age);
	console.log(`That person owns ${pet_name} who is ${pet_age} years old`);
}

fancyPet('Zed', 44, 'Mr. Scruffles', 10, (name, age) => {
	console.log(`Oh fancy ${name} you are ${age} years old`);
});