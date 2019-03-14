const readline = require('readline-sync');

class Game {
    constructor () {
        this.hp = Math.floor(Math.random() * 20) + 1;
    }

    say(prompt) {
        console.log(prompt);
    }

    die(message) {
        this.say(message);
        process.exit(1);
    }

    ask(prompt) {
        console.log(`[[You have ${this.hp} hit points.]]`);
        if(this.hp <= 0) {
            this.die("You died!");
        } else {
            return readline.question(prompt + ' ');
        }
    }

    addRoom(room) {
        this[room.name] = room;
        room.game = this;
    }

    play(name) {
        this[name].enter();
    }

    hit(amount) {
        this.hp -= amount;
    }
}

class Room {
    constructor (name) {
        this.name = name;
    }

    enter() {
        console.log("Implement me!");
    }
}

class Door extends Room {
    enter() {
        // they have to open the door to get the gold
        // what kind of puzzle will they solve?
        this.game.say("You're one step closer to the gold...");
        this.game.say("The door opens if you solve this riddle:");
        let next = this.game.ask("The more you take, the more you leave behind. What am I?");

        if(next === "footsteps") {
            this.game.say("Very well done!");
            this.game.gold.enter();
        } else {
            this.game.say("Hmm try again!");
            this.game.door.enter();
        }
    }
}

class Spider extends Room {
    enter() {
        // they enter here, and the spider takes 10 hit points
        // if they live then they can run away
        this.game.say("Oeph this door leads to a spider")
        if(game.hp > 10) {
            this.game.hp -= 10;
            console.log("The spider takes 10 hit points");
            console.log(`[[You have ${this.game.hp} hit points.]]`)
            this.game.door.enter()
        } else {
            this.game.die("The spider takes 10HP, You're dead!");
        }
    }
}

class Gold extends Room {
    enter() {
        // end of the game they win if they get the gold
        this.game.die("Congrats, you found the gold room!!");
    }
}

class Rope extends Room {
    enter() {
        // they are at the bottom of the well
        // they can go through the door to the gold
        // or go take a wrong turn to the spider
        this.game.say("You got to the bottom of the well, you see two doors");
        this.game.say("Which one door will lead to the gold?");
        let next = this.game.ask("Left or right:");

        if(next === "left") {
            this.game.door.enter()
        } else if(next === "right") {
            this.game.spider.enter()
        } else {

        }

    }
}

class Well extends Room {
    enter() {
        this.game.say("You are walking through the woods and see a well.");
        this.game.say("Walking up to it and looking down you see a shiny thing at the bottom");
        let next = this.game.ask("What do you do?");

        if(next === "climb") {
            this.game.say("You climb down the rope.");
            this.game.rope.enter();
        } else if(next === "jump") {
            this.game.say("Yikes! Let's see if you can survive!");
            this.game.hit(5);
            this.game.rope.enter();
        } else {
            this.game.say("You can't do that here.");
            this.game.well.enter();
        }
    }
}

let game = new Game();
game.addRoom(new Well("well"));
game.addRoom(new Rope("rope"));
game.addRoom(new Gold("gold"));
game.addRoom(new Spider("spider"));
game.addRoom(new Door("door"));
game.play("well");