// question1
// function and(x, y) {
    
//          if (x === true && y === true) {
    
//               return true
    
//          } else {
    
//                return false
    
//          }
    
//     }
    
//     console.log(and (true, true) );
    
//     console.log( and ("happy string", [] ) );


//question2
// function addOnlyNumbers(foo, bar) {
    
//          if (typeof(foo) === "number" && typeof(bar) === "number") {
    
//                return foo + bar
    
//          } else {
    
//                 return NaN
    
//          }
    
//     }
    
//     console.log(addOnlyNumbers(5, Math.PI) ); // Logs
    
//     console.log(addOnlyNumbers("fidget spinner", 22) ); // Logs


//question3
// function isAllNum(x) {
    
//          if (Array.isArray(x) === true && typeof(x[i]) === "number") {
    
//                 return true
    
//          } else {
    
//                  return false
    
//           }
    
//     }
    
//     console.log(isAllNum( [1, 2, 3, 4, 5] ) ); // Logs
    
//     console.log(isAllNum( [1, 2, "mountain dew"] ) ); // Logs 

// function isAllNum(x) {
//     if (Array.isArray(x) !== true) {
//         return false;
//     }
//     for (var i = 0; 1 < x.length; i++) {
//         if (typeof(x [i]) !== "number") {
//             return false;
//         }
//     }
//     return true
// }

// console.log(isAllNum( [1, 2, 3, 4, 5] ) ); // Logs

// console.log(isAllNum( [1, 2, "mountain dew"] ) ); // Logs 


//question4
//There is a typo on Practice Assessment Question 4. You should convert every element that is *not* of type number to `0`.


function forceAllNum(x) {
    
         if (Array.isArray(x) !== true) {
    
                return undefined
    
         }
    
         for (var i = 0; i < x.length; i++) {
    
                 var newArr = []
    
                 if ( typeof( x[i] ) !== "number") {
    
                        return 0
    
                 }
    
                  return x
    
          }
    
    }
    
    console.log(forceAllNum( [1, 2, 3, 4, 5] ) ); // Logs
    
    console.log(forceAllNum( [1, 2, "mountain dew"] ) ); // Logs


// //question 6
// function hasPropertyTacos(loljk) {
    
//          if ( Object.prototype.toString.call(loljk) === "object" && loljk.key === "tacos") {
    
//                 return true
    
//          } else {
    
//                  return false
    
//          }
    
//     }
    
//     console.log( hasPropertyTacos( {name: "lev", tacos: "so many tacos"} ) );
    
//     // Logs
    
//     console.log( hasPropertyTacos( "i am not even an object") );
    
//     // Logs


//question7
// function hasPropertyGeneric(big0, littleP) {
    
//           for (var key in big0) {
    
//                   if (big0[key] !== littleP) {
    
//                         return false
    
//                  } else {
    
//                         return true
    
//                  }
    
//           }
    
//     }
    
//     console.log( {name: "cody", tacos: 3}, "tacos" );
    
//     console.log( {name: "cody", tacos: 3}, "sandwiches" );


//question8
// function convertVowelsGeneric (str, sub) {

//      if ( typeof(str) !== "string" || typeof(sub) !== "string") {

//             return undefined

//      } else {

//               return true

//      }

// }

// console.log("tuesday is my favorite day");

// console.log( {isString: false, isObject: true } );