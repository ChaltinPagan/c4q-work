// let x = 99;

// let y = x.toString().split("");

// console.log(typeof(y));
// console.log(y);

// // Write a function, called persistence, that accepts an integer and returns its multiplicative persistence. Multiplicative persistence is the number of times you must multiply an integer's digits until you reach a single digit.

// // For example, to determine the multiplicative persistence of the number 999, we evaluate 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and 1*2 = 2. It took 4 steps, and therefore the multiplicative persistence of 999 is 4. The multiplicative persistence of 14, then, is 1, and the multiplicative persistence of 9 is 0.

// function persistence(int) {
//     let arr = int.toString().split("");
//     let count = 0;

//     if (arr.length === 2) {
//         count += 1;
//     } 

//     // for (var i = 0; i < arr.length; i++) {
//     //     for (var j = i; j < arr.length; j++){

//     //         Number(arr[j]) * persistence(arr[j + 1])
//     //         count += 1;
//     //     }
//     // }

//     for (var i = 0; i < arr.length; i++) {
//         1 * Number(arr[i]);
//         count++;

//     }

//     return count;
// }

// console.log(persistence(999));


///////////////


// You live in a city where the streets are a perfect grid. Every street goes exactly North-South or East-West, and every block between intersections takes exactly 1 minute to traverse.

// You arrive 10 minutes early to an appointment and decide to take a short walk. You would like your walk to be exactly 10 minutes, and you would like for it to start and end in the same place - you don't want to be late.

// In order to calculate this, you create an array of one-letter strings, each representing 1 minute (or one block) in a particular direction ('n' for North, 's' for South, and so on). For example, to go west and then north, you would write ['w', 'n'].

// Write a function, isValidRoute, that accepts an array of these one-letter strings, which ensures that a) your walk will take exactly 10 minutes, and b) your walk will start and end in the same place.

// function isValidRoute(arr) {
//     if (arr.length < 10) {
//         return false;
//     }

//     let n = 0;
//     let s = 0;
//     let e = 0;
//     let w = 0;


//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === "n") {
//             n++;
//         } else if (arr[i] === "s") {
//             s++;
//         } else if (arr[i] === "e") {
//             e++;
//         } else if (arr[i] === "w") {
//             w++;
//         }
//     }

//     if (n === s && e === w) {
//         //console.log(n, s, e, w);
//         return true;
//     } else {
//         return false;
//     }

// }

// console.log(isValidRoute(["n", "n", "n", "n", "n", "s", "s", "s", "s", "w"]));


