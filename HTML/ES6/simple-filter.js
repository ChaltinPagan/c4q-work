// greaterThan10([1,2,3,11,12,13]); //returns [11,12,13]
// greaterThan10([11,2,3,1,22,4,33]); //returns [11,22,33]

let greaterThan10 = arr => arr.filter( el => el > 10);

console.log(greaterThan10([1,2,3,11,12,13]));
console.log(greaterThan10([11,2,3,1,22,4,33]));