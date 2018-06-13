//q1

// Practice Problem One

// Write a function that returns how many vowels are in a String

// Sample Input: "Hello there! How's it going?"

// Sample Output: 8

//Input is string
//Find vowels in a string
//Return count
//Vowels are  A E I O U

//Solution for loop, .includes, split string into array

// var counter = 0;



// var vowelCounter = function(inputString){

//     var Array = inputString.split('');

//     for(i=0; i<Array.length; i++){

//         if(Array[i] === 'a' || Array [i] === 'e' || Array [i] === 'i' || Array [i] === 'o' || Array [i] === 'u'){

//             counter++;

//         }

//     }

//     return counter;   

// }



// console.log(vowelCounter("Hello there! How's it going?"));


//q2

// Practice Problem Two

// Write a function that returns the product of an array of Ints with any zeros taken out

// Sample Input: [4,0,8,3,0]

// Sample Output: 96


//Input: array
//Output: product of numbers, not zero


// var sampleArray = [4,0,8,3,0]

// function productArray (array) {
//     var product = 1
//     for (var i = 0; i < array.length; i++) {
//         if (!(array[i] === 0) ) {
//             product *= array[i]
//         }
//     }
//     return product
// }

// console.log(productArray([0, 0, 0]))


//q3

// Practice Problem Three

// Write a function that multiplies the corresponding elements in two [Int]s of the same size. Two elements are corresponding if their indicies are the same.

// Problem link

// Sample input: [9, 0, 6] [15, 14, 9]

// Sample output: [135, 0, 54]


var array1 = [9, 0, 6]
var array2 = [15, 14, 9, 8]

function multiplyArray(arr1, arr2) {
    var productArray = []
    if (arr1.length === arr2.length) {
        for (var i = 0; i < arr1.length; i++) {
            productArray.push(arr1[i] * arr2[i])
            
        }
    } else {
        console.log("Arrays are not the same size")
        return 0
    }
    return productArray
} 

console.log(multiplyArray(array1, array2))