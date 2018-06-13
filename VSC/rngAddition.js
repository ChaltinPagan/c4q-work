var readline = require('readline');

var rl = readline.createInterface({

  input: process.stdin,

  output: process.stdout

});



var x = Math.floor(Math.random() * 100);

var y = Math.floor(Math.random() * 100);

console.log('Add these two numbers: ' + x + ' and ' + y )



rl.on('line', function(input) {

    var user = Number(input)

    if (user === Number(x+y)){

        console.log ('You win!')

        rl.close()

    } else {

        console.log ('Try again')

    }

});