class Grader {
    constructor() {
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        rl.question('what is your name?', (name) => {
            rl.question(`Hello ${name}, what  is the name of your assignment?`, aName => {
                rl.question(`What was your grade on ${aName}?`, grade => {
                    this.grader(grade, aName);
                    rl.close();

                })
            })
        })
    }

    grader(x, aName) {
        if (x >= 90) {
            console.log(`You got an A on ${aName}!`)
        } else if (x >= 80) {
            console.log(`You got a B on ${aName}!`)
        } else if (x >= 70) {
            console.log(`You got a C on ${aName}!`)
        } else if (x >= 61) {
            console.log(`You got a D on ${aName}!`)
        } else {
            console.log(`You got a F on ${aName}!`)
        }
    }
}

const x = new Grader()