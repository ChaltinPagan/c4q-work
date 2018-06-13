// var str = ''
// var num = 5
// for (var i = 1; i <= num; i++) {
//   str += i + ', '
//   console.log(str)
// }



// var name = 'alice'
// var copy = name.slice(1)

// console.log(copy)

// var name = 'alice'
// var capitalized = name[0].toUpperCase() + name.slice(1)

// console.log(capitalized)


// var arr = [4, 6, 8, 10, 12]
// // getting [6, 8, 10]. arr will still be the same.
// var sliceOfArr = arr.slice(1, 4)

// console.log(sliceOfArr);


//question 1
// function drEvil (amount) {
    
//          if (amount === 1000000) {
    
//             return amount + " dollars" + " (pinky)"
    
//          } 

//             return amount + " dollars"
         
    
//     }

// console.log( drEvil(1000000));


//question 2
// function verbing (string) {
    
//          if ( string.endsWith("ing") === true && string.length >=3){
    
//                return string + "ly"
    
//          } else if ( string.length >= 3) {
    
//                return string + "ing"
    
//          } else {
    
//               return string
    
//          }
    
//     }

// console.log( verbing("do") );


//question 3
// function getInString (string) {
    
//          var lastLetter = string[string.length - 1]
    
//          console.log( string - lastLetter )
    
//     }

// //console.log(getInString ("happy"));
// getInString("happy");

// function getInString (string) {
    
//          return string.slice(0, string.length - 1)
    
//     }

// console.log( getInString("happy"));


//question 4
// function getLast (string) {
    
//          console.log( string[string.length - 1])
    
//     }

// //console.log(getLast("hydrogen"));
// getLast("hyper");


//question 5
// function capitalLast(string) {
    
//          return string.slice(0, string.length-1) + string[string.length-1].toUpperCase()
    
//     }

// console.log( capitalLast("funny"));

// var name = 'alice'
// var capitalized = name[0].toUpperCase() + name.slice(1)

// console.log(capitalized);


//question6
function mixUp (str1, str2) {
    
         var str1Swap = str2.slice(0,2) + str1.slice(2)
    
         var str2Swap = str1.slice(0,2) + str2.slice(2)
    
         return str1Swap + " " + str2Swap
    
    }

console.log( mixUp ("cat", "do"));