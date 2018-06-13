document.addEventListener('DOMContentLoaded', (event) => {
    
    var quad = window.prompt("Pick a quadrant: #topLeft, #topRight, #bottomLeft, #bottomRight.")

    var color = window.prompt("Pick a color: red, blue, green, yellow.")

    var div = document.querySelector(quad);
    
    div.style.backgroundColor = color
});