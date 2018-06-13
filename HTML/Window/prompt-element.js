document.addEventListener('DOMContentLoaded', (event) => {
    var userTyped = document.getElementById("center");

    var input = window.prompt("Write somthing. Include opening and closing tags.");

    userTyped.innerHTML = input;
});