// Q12. count-odds-and-evens

// Write a function named countOddsAndEvens that takes an array of numbers as argument. Then function should return an object that has two properties: odds and evens, that contain the number of odd numbers in the array, and the number of the even numbers in the array, respectively. Use the reduce method. Do not use a for loop, while loop, or forEach.

let arr = [1, 2, 3, 4, 5, 6, 7];

let obj = {};

obj.odds = 0;
obj.evens = 0;

let filter = arr => arr.filter ( el => {

    if (el % 2) {
        obj.evens ++;
    }
     else {
        obj.odds ++;
     }
    return obj;
})

let count = arr => filter(arr)

//console.log(count(arr));

console.log(obj);
console.log(count(arr));
console.log(filter(arr));