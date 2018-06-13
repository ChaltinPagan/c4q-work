//Ex1: Write a function that moves every element in an array one space to the left.

let arr = [1, 2, 3, 4, 5];

function moveOneLeft(array) {
    let oneLeft = array.shift();
    array.push(oneLeft)
    return array;
}

//console.log(moveOneLeft(arr));

//Ex2: Write a function that moves every element in an array (n) spaces to the left.

function moveNLeft(array, nLeft) {
    let shift = array.slice(0, nLeft);
    let remainder = array.slice(nLeft)
    return remainder.concat(shift);
}

//console.log(moveNLeft(arr, 2));

//Ex3: Write a function that accepts two strings, and returns true if one string is a rotation of the other.
// A string rotation is when you take a string, remove some letters from its end, and prepend them to the front. For example, "JavaScript" rotated by two characters would be "ptJavaScri".

let str1 = "hello";
let str2 = "lohel";

//not finished
function strRotate() {
    if (str1.length !== str2.length) {
        return false;
    } else {
        return true;
    }
}

console.log(strRotate(str1, str2));