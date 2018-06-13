var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
var x = 0;
rl.on('line', function(input) {
    //var x = 0;
  console.log( x );
  console.log( 'Enter a number.' );
  console.log(x += Number(input))
 // input = Number(input)

//   if (input > 0) {
//     console.log( x)
//       x += (input) 
      
//   }
//   } else if ( input < 0) {
//       console.log("Enter a number greater than 0.")
//       console.log( x )
//   } else {
//       x += (input2) 
//       console.log(x)
//   }
});



