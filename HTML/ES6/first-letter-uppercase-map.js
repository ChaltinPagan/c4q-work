// Q8. first-letter-uppercase-map

// Write a function that takes a string as a parameter and converts the first letter of each word of the string to upper case. However, do not use a for loop, while loop, or forEach.

let str = "the dish ran away with the spoon.";

let arr = str.split(" ");

let map = arr.map( el => {
    return el.replace( el[0], el[0].toUpperCase() );
}).join(" ");

let firstLetterUppercase = arr => map;

console.log(firstLetterUppercase(str));

console.log(arr);