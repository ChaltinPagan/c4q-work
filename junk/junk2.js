// Create a function, called "isAnagram", that accepts two strings as an argument. It should return a boolean depending on whether the two strings are anagrams (Links to an external site.)Links to an external site. of one another.

// function isAnagram(str1, str2) {
//     let strLower1 = str1.toLowerCase().split("").sort();
//     let strLower2 = str2.toLowerCase().split("").sort();

//     let arr1 = [];
//     let arr2 = [];

//     strLower1.filter( el => {
//         if (el.match(/[a-z]/)) {
//             arr1.push(el);
//         }
//     })

//     strLower2.filter( el => {
//         if (el.match(/[a-z]/)) {
//             arr2.push(el);
//         }
//     })

//     if (arr1.length !== arr2.length) {
//         return false;
//     } else {
//         return arr1.join("") === arr2.join("");
//     }
   
// }

// console.log(isAnagram("hello", "olleh"));

// /////////////////
// Implement a function, called "exponent", that accepts two integers, x and n, and returns xⁿ.

// The function should be recursive.

// function exponent(x, n) {
//     if (n === 0) {
//         return 1;
//     }

//     if (n === 1) {
//         return x;
//     }

//     return x * (exponent(x, n-1));
// }

// console.log(exponent(10, 0));

/////////////
// Write a function, called "skipTheLine", that accepts a queue and an item as arguments and adds that item to the front of the queue. Use the following code as the basis of your problem (you are welcome to create a Node project to run it).

// Remember, queues have the following methods: deq(), enq(), isEmpty(), peek(), and size().

// Also remember: queuejs implements their queues using arrays. You are welcome to extend queuejs' Queue class, or make your own.

const Queue = require('queuejs');

let queue = new Queue();

function skipTheLine(queue, item) {

    queue._elements.splice(0, 0, item);

    return queue;
}

queue.enq(1);
queue.enq(2);
queue.enq(3);
queue.enq(4);
queue.enq(5);

//console.log(Object.keys(queue));
//console.log(queue._elements);
console.log(skipTheLine(queue, 6));