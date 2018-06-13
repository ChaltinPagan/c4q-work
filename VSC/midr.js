
// var wearSwimsuit = false;
// var tempFahrenheit = 90;

// if (tempFahrenheit > 85) {
//    wearSwimsuit = true;
// }
// console.log(wearSwimsuit);



// function oddCaps(str) {
//     if (typeof str !== 'string') {
//       return undefined
//     } else {
//       var newString = ''
//       for (i = 0; i < str.length; i += 1) {
//         if (i % 2 === 0) {
//           newString += str[i]
//         } else {
//           newString += str[i].toUpperCase()
//         }
//       }
//       return newString
//     }
// }

// console.log( oddCaps("giraffe"))


// function firstString (arr) {
    
//            for (var i = 0; i < arr.length; i++) {
    
//                   if ( typeof(arr [ i ] ) === "string") {
    
//                           return arr[ i ]
    
//                   } else {
    
//                            return undefined
    
//                   }
    
//            }
    
//     }

// function firstString(arr){
//     for (var i = 0; i < arr.length; i++){
//       if (typeof( arr[i] ) === 'string') {
//         return arr[i]
//       }
//     }
//     return undefined
//   }
//     console.log( firstString([3, 7, 'banana', 'kierkegaard']));
    // returns 'banana'


    // var globalVar = 5;
    // if (true) {
    //   globalVar = 100;
    // }
    // console.log(globalVar);


    // var crazyTown = undefined;
    // if (undefined || null || 0 || false || NaN || '') {
    //   crazyTown = true;
    // } else {
    //   crazyTown = false;
    // }
    // console.log(crazyTown);


    // var cincinatti = undefined;
    // if ( [] && 'pineapple' ) {
    //   cincinatti = true;
    // } else {
    //   cincinatti = false;
    // }
    // console.log(cincinatti);


    // console.log( ![] );


    // var x = 5;
    // function xIsAParameterNotAGlobal( x ) {
    //   return x;
    // }
    // console.log( xIsAParameterNotAGlobal( 22 ) );


//MU1 q1
// function timesTwo(x) {
    
//          return x * 2
    
//     }
    
//     var foo = timesTwo(4)
    
//     var bar = timesTwo(6)
    
//     console.log(foo + bar);


//MU1 q2
// catFood expects a string

// function chomper (catFood) {
    
//           //var firstLetter = catFood.length[0]
    
//           return catFood.slice(1, catFood.length)
    
//     }
    
//     var frosted = chomper("romeo")
    
//     var flakes = chomper("juliet")
    
//     console.log(frosted + flakes);


//MU1 q3
// x expects an array

function arrayDoubler1 (x) {
    
          // return every element of array times two
    
          var newArr = []
    
          for (var i = 0; i < x.length; i++) {
    
               newArr.push(x[i]*2)
    
          }
          return newArr
    
    }
    
    console.log( arrayDoubler1( [1,2,3,4] ) );
    
    console.log( arrayDoubler1 ([2.2, 3.3, 4.4]) );


//MU1 q4
// function arrayDoubler2(x) {
    
//           // Return array element times two.
    
//           // Return non-numeric element with 0.

//           var newArr = []
    
//           for (var i = 0; i < x.length; i++) {
    
//                 if ( typeof( x[i]) === "number") {
    
//                       newArr += x[i] * 2
    
//                 } else {
    
//                        newArr += 0
    
//                 }
    
//           }
//           return newArr
//     }
    
//     console.log( arrayDoubler2([1,2, "shoe", "glue"]) );
    
//     console.log( arrayDoubler2([5, "green tea ice cream", 55]) );


//MU1 q5
// Expect array for x.

// function linearSearch(x, y) {
    
//           // Return index of first element of x that equals y
    
//           // Return undefined is none equal y
    
//           for (var i = 0; i <x.length; i++) {
    
//                 if ( x[i] === y) {
    
//                      return [i]
    
//                  } 
    
//           }
    
//     }
    
//     console.log(linearSearch([1,2,3,4], 3) );
    
//     console.log(linearSearch([5, "leona", "x"], "leona") );
    
//     console.log(linearSearch([1,2,3,4], "sunny delight") );
