const readline = require('readline-sync');

const say = (prompt) => {
	console.log(prompt);
}

const die = (message) => {
	say(message);
	process.exit(1);
}

const ask = (hp, prompt) => {
	console.log(`[[You have ${hp} hit points.]]`);
	if(hp <= 0) {
		die("You died!");
	} else {
		return readline.question(prompt + ' ');
	}
}

const door = (hp) => {
	// they have to open the door to get the gold
	// what kind of puzzle will they solve?
}
	