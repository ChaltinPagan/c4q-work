let mathModule = require("./math-module.js");
let stringModule = require("./strings-module.js");

let a = 5;
let b = 8;

let resultSum = mathModule.sum(a, b);
console.log(`The sum of ${a} and ${b} is ${resultSum}.`);

let resultMultiply = mathModule.multiply(a, b);
console.log(`The product of ${a} and ${b} is ${resultMultiply}.`);

let resultDivide = mathModule.divide(a, b);
console.log(`The quotient of ${a} and ${b} is ${resultDivide}.`);

let resultSquare = mathModule.square(a);
console.log(`The square of ${a} is ${resultSquare}.`);


let str = "hello";

let resultFirst = stringModule.firstLetter(str);
console.log(`The first letter of the string is ${resultFirst}.`)

let resultCap = stringModule.capitalize(str);
console.log(`This is the string capitalized: ${resultCap}.`)

let resultReverse = stringModule.reverse(str);
console.log(`The reverse of the string is ${resultReverse}.`)