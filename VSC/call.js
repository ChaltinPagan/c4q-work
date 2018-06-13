//q1
// var arr = [1, 2, 3, 4, 5]

// var newArr = []


// function logEach(arr) {
    
//           for (var i = 0; i < arr.length; i++) {
    
//                   return arr[ i ]
    
//           }
    
//     }
    

// arr.forEach ( function(arr) {

//       console.log ( newArr.push(arr) )
    
// });
    
// console.log(logEach(arr))    

// function logEach (arr) {

//         var newArr = []
    
//           return arr.forEach (function (arr) {
    
//                  newArr.push(arr)
    
//           })
    
//     }

// function logEach (arr) {
//     var newArr = []
    
//           arr.forEach (function (arr) {
    
//                  console.log( newArr.push(arr))
    
//           })
    
//     }

//     console.log(logEach(arr))


//q2
// var mixedArr = [1, "cat", true]



// function logArrTypes () {
   

//        mixedArr.forEach(function(mixedArr) {
//         var str = mixedArr[i] + " is a " + typeof(mixedArr[i])

//                 return str.push(mixedArr)

//        })

// }

// console.log(logArrTypes(mixedArr))

// var mixedArr = [1, "cat", true] 

// function logArrTypes (mixedArr) {
    
//           var str = ""
    
//           mixedArr.forEach(function(mixedArr) {
    
//             console.log(mixedArr[index].push(str) + typeof(element) )
    
//            } )
    
//     }

//     console.log(logArrTypes(mixedArr))


//q3
// var track = setInterval(callback, 1000)

// function callback () {

//      for (var i = 0; i > 0; i++) {

//            return i

//      }

// } 

// console.log(track)


//q4
// var arr = [1, 2, 3];
// var newArr = map(arr, function(num){ 
//    return num + 1;
// });
// console.log(newArr);


// function logArrayElements(element, index, array) {
//     console.log('a[' + index + '] = ' + element);
//   }
  

//   var arr =   [2, 5, , 9]
//   // Notice that index 2 is skipped since there is no item at
//   // that position in the array.
// arr.forEach(logArrayElements);
//   // logs:
//   // a[0] = 2
//   // a[1] = 5
//   // a[3] = 9



//-----------------------------------



// //q2 soloution
// let logArrTypes = function(arr) {
    
//      arr.forEach(function(element) {
    
//      console.log(element + ' is a ' + typeof(element));
    
//      });
    
//     }
    
//     logArrTypes(['How', true, 'is', 9]);


//q1 solution
// var array = [65, 44, 12, 4]

// function logEach(array){

//     array.forEach(function(element) {

//         console.log(element)

//     });

// }

// console.log(logEach([65, 44, 12, 4]));


//q3 solution ??

var seconds = 0
setInterval(function () {
    console.log(seconds + "seconds")
    seconds += 1
}, 1000 )


//q4 solution
function map(arr,func) {
    var newArr = 
}