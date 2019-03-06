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

const spider = (hp) => {
	// the spider takes 10 hit points
	// if they live then they can run away
}

const gold = (hp) => {
	// end of the game they win if they get the gold
}

const rope = (hp, action) => {
	// they are at the bottom of the well
	// they can go through the door to the gold
	// or go take a wrong turn to the spider
	
	if(action === "climb") {
		say("You carefully climb down the rope to the bottom of the well");
	} else if(action === "jump") {
		say("You jump, and break one leg but you make it to the bottom of the well");
	}
	say("There are two doors at the bottom of the well");
	let next = ask(hp, "Which door do you choose: left or right?");
	
	if(next === "left"){
		say("You opened the door to the spider");
		spider(hp);
	} else {
		say("It looks like you're on the way to the gold room");
		door(hp);
	}

}

const well = (hp) => {
	say("You are walking through the woods and see a well.");
	say("Walking up to it and looking down you see a shiny thing at the bottom");
	let next = ask(hp, "What do you do?");
	
	if(next === "climb") {
		say("You climb down the rope.");
		rope(hp, "climb");
	} else if(next === "jump") {
		say("Yikes! Let's see if you survive!");
		hp = Math.floor(hp / 2);
		rope(hp, "jump");
	} else {
		say("You can't do that here.");
		well(hp);
	}
}

// setup hit points
let hp = Math.floor(Math.random() * 10) + 1;

// this starts the game
well(hp)

	