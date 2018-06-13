var canvas;
var context;

document.addEventListener("DOMContentLoaded", (event) => {

    canvas = document.querySelector("canvas");

    context = canvas.getContext("2d");

    
    document.fonts.load("30px Schoolbell").then( (event) => {

        context.font = "30px Schoolbell";
        context.fillStyle = "teal";
        context.fillText("Chaltin", 100, 100);

    })
    

    
    

    context.strokeStyle = "blue";
    context.strokeRect(0, 0, 499, 499);
    
    

});