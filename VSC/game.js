var readline = require("readline")

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var badGuy = {
    name: "Mr. Potato Head",
    hitPoints: 50
}

console.log("Beat up the bad guy: " + badGuy + "!")
console.log("Press ENTER to begin")

rl.on("line", function (input) {
    //checks inout
    if (inut.toLowerCase() === "kick") {
        var kick = Math.floor( Math.random()*15 + 1)
        badGuy.hiypoints -= kick
        console.log("You kick " + badGuy + " for " + kick + "damage.")
        console.log(badGuy.name + " has " + badGuy.hitPoints + " left,")
    }else if (input.toLowerCase() === "punch"){
        var punch = Math.floor( Math.round()*5 + 5)
        badGuy.hitPoints -= punch
        console.log("You kick " + badGuy + " for " + punch + "damage.")
        console.log(badGuy.name + " has " + badGuy.hitPoints + " left,")
    }

    //sees if user won
    if (badGuy.hitPoints <= 0) {
        console.log("You beat up " + badGuy + "!")
        console.log("YOU WIN!!!")
        
        //might have to move after rl.prompt or add return after rl.close
        rl.close()

    } else {

        //asks for more input
        rl.setPrompt("You can PUNCH or KICK: ")
        rl.prompt()
    }
 

})