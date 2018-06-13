// Q10. reduce-sum

// Write a function called sum that uses the reduce method to sum up an array of numbers. Do NOT use a loop.

let arr = [1, 2, 3, 4];

let sum = arr => arr.reduce( (sum, value) => sum + value);

console.log(sum(arr));