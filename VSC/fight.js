// Write a battle game, fight.js, with an object badGuy having properties hitPoints, which is a number, and name, which is a string.

// Prompt the user with two options, punch and kick.

// If the user types punch, subtract a random number from 5-9 from the monster's hit points, and log the attack.

// If the user types kick, subtract a random number from 1-15 from the monster's hit points, and log the attack.

// When the badGuy has 0 hit points, tell the user they have won the game, and exit the game.


//game modifications:
// 1. Make a User!

// 1a. Make an object `user` with hit points and a name.

// 1b. Somehow, the badGuy does moves that take hit points from user.

// 1c. The user can MISS.

// 1d. The user can find candy bars to gain hit points.

// 1e. The user can find weapons to use.

// 1z. Maybe the user can choose their own name!


var readline = require("readline")

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var badGuy = {
    name: "Mr. Potato Head",
    hitPoints: 50
}

//game modification 1 and 1a
var user = {
    name: "Challenger",
    hitPoints: 50
}

//Candy bars for more user hitpoints
var x = Math.floor( Math.random() *10)
var y = Math.floor( Math.random() *10)

console.log("Hello, " + user.name + "! Help us!")
console.log("Beat up the bad guy: " + badGuy.name + "!")
console.log("Press ENTER to begin")


rl.on("line", function (input) {
  
    //checks input
    if (input.toLowerCase() === "kick") {
        var kick = Math.floor( Math.random()*15 + 1)
        badGuy.hitPoints -= kick
        //user will lose half of kick value from hitPoints total
        user.hitPoints -= (kick / 2)
        console.log("You kick " + badGuy.name + " for " + kick + " damage.")
        console.log(badGuy.name + " has " + badGuy.hitPoints + " hitPoints left,")
        //log user hitpoints
        console.log(user.name + " has " + user.hitPoints + " hitPoints left,")
    } else if (input.toLowerCase() === "punch"){
        var punch = Math.floor( Math.random()*5 + 5)
        badGuy.hitPoints -= punch
        //user will lose half of punch value from hitpoints total
        user.hitPoints -= (punch / 2)
        console.log("You kick " + badGuy.name + " for " + punch + " damage.")
        console.log(badGuy.name + " has " + badGuy.hitPoints + " hitPoints left.")
        //log user hitpoints
        console.log(user.name + " has " + user.hitPoints + " hitPoints left.")
    } else if (input.toLowerCase() !== "kick" || input.toLowerCase() !== "punch"){
        //if user input is not kick or punch, badguy gains hitpoints and user loses hitpoints
        //This appears after first press of Enter. Haven't figured out how to not let that happen.
        badGuy.hitPoints += 3
        user.hitPoints -= 6
        console.log("Oh, no! " + badGuy.name + " gained more HitPoints!")
        console.log(badGuy.name + " has " + badGuy.hitPoints + " hitPoints now.")
        console.log(user.name + " has " + user.hitPoints + " hitPoints now.")
        rl.setPrompt("You can PUNCH or KICK: \n")
        rl.prompt()
    } else if (Number(input) === x + y) {
        user.hitPoints += (x+y)
        console.log("Yay! You now have " + user.hitPoints + "!")
    }

    //sees if user won
    if(badGuy.hitPoints <= 0) {
        console.log("You beat up " + badGuy.name + "!")
        console.log("YOU WIN!!!")
        
        //might have to move after rl.prompt or add return after rl.close
        rl.close()

    } else if (user.hitPoints < 10 && user.hitPoints > 0) {

        console.log("Oh, no!" + user.name + " is dying! You need to power up!")
        console.log("Add these numbers correctly and gain a candy bar for more power: \n" + x + " and " + y)
    } else if (user.hitPoints <= 0) {
        console.log(badGuy.name + " has " + badGuy.hitPoints + " hitPoints.")
        console.log("You have " + user.hitPoints + "left.")
        console.log("You lost :(")
        rl.close()

    } else {

        //asks for more input
        //rl.setPrompt("You can PUNCH or KICK: ")
        rl.prompt()
    }
 

})