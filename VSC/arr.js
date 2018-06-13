//question1
// function arrLength (array) {
    
//          return array.length
    
//     }

// var array = ["cat", "dog", "fish", "mouse" ]

//     console.log( arrLength(array) );


//question2
// function longestArr (array1, array2) {
    
//         if (array1.length > array2.length) {
    
//                return "array1 is longer than array2."
    
//          } else if (array1.length < array2.length) {
    
//                   return "array2 is longer than array1"
    
//          } else {
    
//                    return null
    
//          }
    
//     }
    
//     var array1 = [ 1, 2, 3, 4]
    
//     var array2 = ["up", "down", "left", "right"]
    
//     console.log ( longestArr(array1, array2) ) ;


//question 3
// function addTwoElements (array, value1, value2) {
    
//     array.push(value1, value2)
//            return array
    
//     }
    
//     var array = ["one fish", "two fish"]
    
//     var value1 = "red fish"
    
//     var value2 = "blue fish"
    
//     console.log( addTwoElements(array, value1, value2) );


//question 4
// function removeLastTwo(array) {
    
//         //   array.pop()
//         //   array.pop()
        
//         array.splice(-2)
//           return array
    
//     }
    
//     var array = [1, 2]
    
//     console.log( removeLastTwo(array) );


//question 5
// function middleElement (array) {
    
//          if (array.length % 2 != 0) {
    
//                return array[ Math.floor(array.length / 2) ]
    
//          } else {
    
//                return "Oops, there's no middle."
    
//          }
    
//     }
    
//     var array = [1, 2, 3, 4]
    
//     console.log( middleElement(array) );


//question 6
// function everyThird(array) {
    
//          for (var i = 2; i <= array.length; i+=3) {
    
//                 return array[i]
    
//                 }
    
//          }
    
    
    
//     var array = [1, 2, 3, 4, 5, 6]
    
//     console.log( everyThird(array) );


//question7
// function sumArray (array) {
    
//          var sum = array.reduce(function(sum, value))
    
//          return array
    
//     }
    
//     var array = [1, 2, 3, 4, 5]
    
//     console.log( sumArray(array) );

// function sumArray(array) {
//     for (var i = 0; i < array.length; i++){
//         sum += i
//     }
        
// }

// var sum = 0
// var array = [1, 2, 3, 4, 5]

// console.log( sumArray(array));

//question 8
// function doubleTrouble (array) {
    
//          for (var i = 0; i < array.length; i *= 2){
    
               
    
//          }
//          return newArr.push[i]
//     }
    
//     var newArr = []
//     var array = [1, 2, 3, 4, 5]
    
//     console.log( doubleTrouble(array) );


// question 9
// function lastToFirst(array) {
    
//           array.unshift(array.pop() )
    
//          return array
    
//     }
    
//     var array = [1, 2, 3, 4]
    
//     console.log (lastToFirst(array) );
    
    
    
    
    
    