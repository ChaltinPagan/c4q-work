// Q11. reduce-min

// Write a function called reduceMin that uses the reduce method to return the minimum number in an array of numbers. Do NOT use a loop.

let arr = [2, 8, 4, 1];

let reduceMin = arr => arr.reduce( (curr, acc) => (curr < acc ? curr : acc) );

console.log(reduceMin(arr));