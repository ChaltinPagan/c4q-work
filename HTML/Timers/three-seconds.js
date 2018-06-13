document.addEventListener("DOMContentLoaded", (event) => {
    body = document.querySelector("body");

    heading = document.querySelector("h1");

    stop = window.setTimeout( function() {
        heading.innerText = "You are too slow at clicking. You lose.";
    }, 3000);


})
    
    document.addEventListener("click", (event) => {
    
        heading.innerText = "Great click. You win!"

        window.clearTimeout(stop);


})