var input = window.prompt("Enter a number.");

var number = Number(input);

if (isNaN(number)) {
    window.alert("That is not a number.")
} else if (number % 2 === 0) {
    window.alert("That number is even.")
} else {
    window.alert("That number is odd.")
}