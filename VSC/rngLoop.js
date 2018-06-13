var readline = require('readline');



var rl = readline.createInterface({



  input: process.stdin,



  output: process.stdout



});





var x = Math.floor(Math.random() * 100);

var y = Math.floor(Math.random() * 100);

console.log('Add these two numbers: ' + x + ' and ' + y )



// rl.setPrompt('Add these two NEW numbers: ' + x + ' and ' + y)



rl.on('line', function(input) {

    

    if (Number(input) === Number(x+y)){

        console.log ('You win!')



        x = Math.floor(Math.random() * 100);

        y = Math.floor(Math.random() * 100);

        console.log('Add these two numbers: ' + x + ' and ' + y )

        // rl.prompt()



    } else {



        console.log ('Try again')



    }



});