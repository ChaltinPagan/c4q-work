// Q7. map-strings-to-nums

// Write a function called stringsToNums that takes an array of strings, converts them to numbers, and returns a new array containing those numbers. Use the map array method, do not use any loops.

let arr = ["1", "2", "3", "4"];

let stringsToNums = arr => arr.map( el => Number(el) );

console.log(stringsToNums(arr));