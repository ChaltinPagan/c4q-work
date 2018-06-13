// Q4. forEach-sum

// Write a function called forEachSum that takes in an array of numbers as an argument and returns a sum of the array. The function should use the forEach array method and should NOT use for loop or while loop.

let arr = [1, 2, 3, 4];

let sum = arr.reduce( (curr, acc) => {return curr + acc});

let forEachSum = arr => arr.forEach( el => arr.reduce( (curr, acc) => {return curr + acc}));

console.log(forEachSum(arr));

//console.log(sum)

//solution
//const forEachSum = x => x.reduce( (sum, el) => sum + el, 0 ); 