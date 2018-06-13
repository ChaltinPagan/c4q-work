//console.log('#'+Math.floor(Math.random()*16777215).toString(16) );

// function color() {
//     hex = '#'+Math.floor(Math.random()*16777215).toString(16);

//     if (hex.length === 7) {
//         return hex;
//     } else {
//         hex = "#d3d3d3";
//         return hex;
//     }
// }

// hex = '#'+Math.floor(Math.random()*16777215).toString(16);
// let colorTwo = () => (hex.length === 7) ? hex : "#d3d3d3";

// x = colorTwo();
// console.log(x);

x = Math.random()*1000
y = Math.random()*800

let coordX = () => (x < 1000) ? x : x = 950;

let coordY = () => (y < 800) ? y : y = 750;

console.log(coordX());
console.log(coordY());