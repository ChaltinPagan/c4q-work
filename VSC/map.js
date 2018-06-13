//q1

// var original = [1, 2, 3];
// // var newbie = original.map( YOUR CODE GOES HERE );
// // console.log (newbie);
// // // [11, 12, 13]

// // Use .map() to build a new array where every element of original is incremented by 10.

// var newbie = original.map( el => {
//     return el + 10;
// });

// console.log(newbie)


//q2

// var original = [1, 2, 'buckle', 'my', 'shoe'];
// // var newbie = original.map( YOUR CODE GOES HERE );
// // console.log( newbie );
// // // ['', '', 'buckle', 'my', 'shoe']

// // Use .map() to build a new array where every non-string element of original is converted to an empty string.

// var newbie = original.map( el => {
//     if ( typeof(el) !== "number") {
//         return " "
//     } 
//     return el
// })

// console.log(newbie)


//q3

// var original = [1, 2, 3, 4, 5, 6];
// // var newbie = original.map( YOUR CODE GOES HERE );
// // console.log( newbie );
// // // [2, 4, 6]

// // Use .filter() to build a new array containing only the evenly numbered elements of original.

// var newbie = original.filter( el => {
//     if ( el % 2 === 0) {
//         return true
//     }
// })

// console.log(newbie)


//q4

// var original = [true, false, [], '', 0, NaN, 'kittens', 500];
// // var newbie = original.filter( YOUR CODE GOES HERE );
// // console.log( newbie );
// // // [true, [], 'kittens', 500]

// // Use .filter() to build a new array containing only the truthy elements of original.

// var newbie = original.filter( el => {
//     if (typeof(el) !== false){
//         return el
//     }
// })

// console.log(newbie)


//q5

// var arr = [1, 2, 6, 7, 100];
// // var sumOfArr = arr.reduce( YOUR CODE GOES HERE );
// // console.log( sumOfArr );
// // // 116

// // Use .reduce() to return the sum of every element in arr and assign it to sumOfArr.

// var sumOfArr = arr.reduce(function (el, total) {
//     return total + el
// }, 0); 

// console.log(sumOfArr)


//q6

// var arr = [1, 2, 'popsicle', 6, 7, 'axe body spray', 100];
// // var sumOfArr = arr.filter.( YOUR CODE GOES HERE ).reduce( YOUR CODE GOES HERE );
// // console.log( sumOfArr );
// // // 116

// // Use .filter() to build a new array containing only the number-type elements of arr and then use .reduce() to return the sum of every element of that and assign it to sumOfArr.

// var sumOfArr = arr.filter( el => {
//     if (typeof(el) === "number") {
//         return el
//     }
// }).reduce(function(el, total) {
//     return total + el
// }, 0);

// console.log(sumOfArr)


//q7

// var arr = [1, 2, 6, 7, 100];
// // var sumOfArr = arr.map.( YOUR CODE GOES HERE ).reduce( YOUR CODE GOES HERE );
// // console.log( sumOfArr );
// // // 232

// // Use .map() to build a new array which doubles every element of arr and then use .reduce() to return the sum of every element of that and assign it to sumOfArr.

// var sumOfArr = arr.map( el => {
//     return el *2
// }).reduce( function(el, total) {
//     return total + el
// }, 0);

// console.log(sumOfArr)


//q8

var arr = [1, 2, 500, 6, 3, 26];
// var max = arr.reduce( YOUR CODE GOES HERE );
// console.log( max );
// // 500

// Use .reduce() to return the largest number in arr.

// var max = arr.reduce( function (acc, curr) {
//     if (acc > curr){
//         return acc
//     } else {
//         return curr
//     }
// })

// console.log(max)


//q9

// Write a function elementDivisibleBy with parameters divisor and arr. Use .filter() to return a new array of every element of arr that can be evenly divided by divisor.

// console.log( elementDivisibleBy( 2, [1, 2, 3, 4] ) );
// // [2, 4]
// console.log( elementDivisibleBy( 5, [5, 25, 4, 8, 100] ) );
// // [5, 25, 100]

// function elementDivisibleBy (divisor, arr) {
//     newArr = []
//     arr.filter( el => {
//         if (el % divisor === 0) {
//             newArr.push(el)
//         }
//     })
//     return newArr
// }


//q10

// Write a function joinByReduce with arguments str and arr. Use .reduce() to return a string consisting of every element of arr separated by str. (There will be an extra occurrence of str at the end of your return value; this is okay.)

// console.log( joinByReduce( '-', [2, 4, 'sportsball', 'sewing machine'] ) );
// // "2-4-sportsball-sewing machine-"
// console.log( joinByReduce( '+', [1, 2, 3] ) );
// // "1+2+3+";

// function joinByReduce(str, arr) {
//     newArr = []
//     newStr = newArr.toString()
//     arr.reduce( function (el, curr) {
//         //newArr.push(el + str)
//         return curr.concat(acc)
//     }, [])
//     //return newArr
// }

//student solution
function joinByReduce(str,arr){
    
    
    
        var newArr = arr.reduce(function(total,el){
    
          
    
            return total + el + str 
    
    
    
            
    
        },' ')
    
        
    
        return newArr
    
    }
    
    
    
    console.log( joinByReduce( ':)', [2, 4, 'sportsball', 'sewing machine'] ))