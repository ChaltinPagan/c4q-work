var readline = require("readline")
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var tasks = []

console.log("What is a task?")

rl.on("line", function(input){

    
    if (input.length) {
        tasks.push( newTask(input))
    }

    logTasks()
})

function newTask(str) {
    return {
        task: str,
        completed: false
    }
}

function logTasks() {
    console.log("Your tasks are:")
    tasks.forEach( (el) => {
        console.log(el)
    })
    
}