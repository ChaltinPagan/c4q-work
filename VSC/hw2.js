// var x = 'i want to go to outer space';
// console.log( x.split(' ') );


// var box = {
//     color: 'brown',
//     height: 3,
//     width: 2,
//     depth: 5,
//     contents: 'iPod Shuffle'
//   }
//   box.height = true;
//   console.log( box.height + " - " + box.qwerty );


//question 5
// function noDottedLetters (str) {
    
//            for (var i = 0; i < str.length; i++) {
    
//                  if ( i === "j") {
    
//                        return str.replace ( /i/, str[i].toUpperCase)
                       
    
//                  }
    
//           }

          
//     }
    
    //console.log( noDottedLetters("juicy") );

// function noDottedLetters (str) {
//       function upper(str){
//             for (var i = 0; i <str.length; i++){
//                   if (i === "i" || i === "j"){
//                         return str[i].toUppercase
//                   }
//             }
//       }
//       return str.replace(/i + j/g, upper(str)) 
//       //return str.replace(/j/g, "J")
// }

// console.log(noDottedLetters("injustice"))

// //question 6
// function blameItOnTim (accusation, accused) {
    
//             return accusation.replace(accused, "tim")
    
//     }
    
//     console.log( blameItOnTim("luna ate the cookies", "luna") );
    
//     console.log( blameItOnTim("priya secretly loves java", "priya") );


//question 8
// function getSize( w, h, d) {
//       var area = w * h;
//       var volume = w* h* d;
//       var sizes = [area, volume];
//       return sizes;

// }

// var areaOne = getSize(3, 2, 2)[0]
// var volumeOne = getSize(3,2,3) [1]

// console.log(areaOne)
// console.log(volumeOne)

//question8
//On a scale of 1 to 10.

// var sleepy = 7 <= 7 ? "power through it" : "take a nap";


// console.log(sleepy)


//q3 answer

//add g to end of var re to change every instance
//return str.replace(/i/g "I").replace(/j/g.\, "J")
function noDottedLetters(str){
    
        var re = /i|j/
    
           return str.replace(re,'I').replace(re,'J');
    
    }
    
    console.log(noDottedLetters('i love jello'));