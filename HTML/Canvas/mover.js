document.addEventListener("DOMContentLoaded", (event) => {

    canvas = document.querySelector("canvas");

    context = canvas.getContext("2d");

    x = 0
    context.fillStyle = "black";
    context.fillRect(x, 0, 40, 40);

    document.addEventListener("keypress", (event) => {

        context.clearRect(0, 0, 600, 40)

        x += 40;

        context.fillStyle = "black";
        context.fillRect(x, 0, 40, 40);

        
        
    })
})