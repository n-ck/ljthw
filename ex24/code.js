const readline = require('readline-sync');

class Game {
    constructor () {
        this.hp = Math.floor(Math.random() * 10) + 1;
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
            return readline.question(prompt + '');
        }
    }

}