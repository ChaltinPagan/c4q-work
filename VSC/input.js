//q1
// var readline = require("readline")


// var rl = readline.createInterface ( {

//      input: process.stdin,

//      output: process.stdout

// })


// function clear () {

//      process.stdout.write("u\001B[2Ju\001B[0;0f")

// }


// rl.on("line", function (input) {

//       var userInput = input + ""

//       console.log(userInput.concat(input))

// })


//q2
// var readline = require("readline")


// var rl = readline.createInterface ( {

//      input: process.stdin,

//      output: process.stdout

// })


// function clear () {

//       process.stdout.write("\u001B[2J\100B[0;0f")

// }


// rl.on ("line", function (input) {

//       var total = [].reduce(function (sum, value) {

//                return sum + value

//        }, 0);

//       for (var i = 0; i < input.length; i++) {

//              if ( typeof(input[i].length) === "number") {
//                  total.push(input[i])


//              }

//        }
//        console.log(total)

// })


//q3
// var readline = require("readline")


// var rl = readline.createInterface ( {

//        input: process.stdin,

//        output: process.stdout

// } )


// function clear () {

//         process.stdout.write("\u100B[2j\u100B[0;0f")

// }


// rl.on ("line", function (input) {

//      var array = []

//      for (var i = 0; i < input.length; i++) {

//            if ( typeof( input[i] === "number") ) {

//                    array.push(input[i])

//            }

//      }

//             //console.log(array)

// })

//-------------------------------

///q4 solution
// var readline = require('readline');

// var rl = readline.createInterface({

//     input: process.stdin,

//     output: process.stdout

// })





// rl.on('line', function(input){

//     var split = input.split(' ')

//     var saveNum = 0

//     split.forEach(function(element){

//         var num = parseInt(element)

//         if(!isNaN(num)){

//            saveNum += num;



//         }

//     })

//     console.log(saveNum);

// })


//q1 and q2
var readline = require('readline')

var consoleInterface = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});

var y = []

consoleInterface.on('line', function(input){

    console.log('Your input was: ' + input)

    y.push(input)

    console.log("Previous entries: " + y)

})





readline = require('readline')

var consoleInterface = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});



var y = 0

consoleInterface.on('line', function(input){

    var num = Number(input)

    if (isNaN(input)){

        console.log('That is not a number')

    }

    else { console.log("Your entry: " + num)

        y += num

}

    console.log("Sum of all entries: " + y)

})