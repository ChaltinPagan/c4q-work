// Q9. implement-map

// Write a function called map that takes in two arguments: an array and a function. map should apply the passed in function to every memeber of the array, and return a new array with the results.


let arr = [1, 2, 3, 4];

let fun = arr => arr.map( el => el + 10);

let map = (arr, fun) => fun(arr);

console.log(map(arr, fun) );