
//q1
var readline = require("readline");

var rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});

var counter = 0;
console.log("counter is " + counter);

rl.on("line", function (input) {
    
    if (input.toLowerCase() === "dec") {
        console.log( counter -= 1);
    } else if (input.toLowerCase() === "inc") {
        console.log( counter += 1);
    } else if (input.toLowerCase() === "res") {
        console.log (counter = 0);
    } else {
        console.log("hey you can't type that");
    }
    
});


q2

rl.on("line", function(input) {
    var args = input.split("")
    var op = args[0]
    var n1 = Number(args[1])
    var n2 = Number(args[2])
    if(!("*/+".includes( args [0]) 
        && !isNaN(Number(args[1]))
        && !isNaN(Number(args[2]))
        )){
        console.log("somethng is not right")
    } else if (args[0] === "+")  {
        console.log( Number(args[1]) + Number(args[2]))
    } else if (args[0] === "*") {
        console.log( Number(args[1]) * Number(args[2]))
    } else if (args[0] === "-") {
        console.log( Number(args[1]) - Number(args[2]))
    } else if (args[0] === "/") {
        console.log( Number(args[1]) / Number(args[2]))
    }
})