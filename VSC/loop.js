// Write a function fizzOrBuz that uses log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead. 

// function fizzOrBuzz(num) {
//     for (var i = 1; i <= num; i++){
//         if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0 && i % 3 != 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// fizzOrBuzz(100);

// Write a function fizzAndBuzz that logs all the numbers from 1 to 100, with some exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead. For numbers divisible by both 3 and 5, log "FizzBuzz".

// function fizzAndBuzz(num){
//     for (var i = 1; i <= num; i++){
//         if (i % 3 === 0 && i % 5 ===0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0){ 
//             console.log("Fizz");
//         } else if (i % 3 != 0 && i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// fizzAndBuzz(100);


// 99 bottles of beer on the wall,

// 99 bottles of beer.

// Take one down, pass it around,

// 98 bottles of beer on the wall.


function beer(num){
    for (var i = num; i >= 1; i-=1){
        if (i > 1) {
            console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down, pass it around, " + i + " bottles of beer on the wall.")
        } else {
            console.log(i + " bottle of beer on the wall," + i + " bottle of beer. Take one down, pass it around, " + " No more bottle of beer on the wall.")
        }
    }
}

beer(99);

function log(num) {
    
       
    
    for (var i = num ;i >=1 ;i-= 1) {
    
         console.log(num);
    
    }
}

log(10);