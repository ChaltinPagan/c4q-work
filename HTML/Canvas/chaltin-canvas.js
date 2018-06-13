document.addEventListener("DOMContentLoaded", (event) => {

    canvas = document.querySelector("canvas");

    body = document.querySelector("body");

    body.style.backgroundColor = "#FFFAFA";

    context = canvas.getContext("2d");

    document.fonts.load("50px Berkshire Swash").then( (event) => {

        context.fillStyle = "#800020";
        context.font = "50px Berkshire Swash";
        context.fillText("Chaltin's Canvas Drawing", 20, 50)

        context.font = "16px Berkshire Swash";
        context.fillText("Press any key to 'draw' a box on the canvas.", 20, 80)

    })

    document.addEventListener("keypress", (event) => {

        x = Math.random()*1000
        y = Math.random()*800
        w = Math.random()*100
        h = Math.random()*100

        // let coordX = () => (x < 1000) ? x : x = 950;

        // let coordY = () => (y < 800) ? y : y = 750;

        // r = Math.random()*255
        // g = Math.random()*255
        // b = Math.random()*255

        //context.strokeStyle = "rgb("+r+","+g+","+b+")";
        //context.strokeStyle = '#'+ Math.floor(Math.random()*16777215).toString(16);

        //The below hex color generator sometime generates an invalid hex code (five characters after the hashtag instead of six). I wrote a function to handle that outcome. If an invalid hex code is generated, then the rectangle will be a fallback color.
        hex = '#'+ Math.floor(Math.random()*16777215).toString(16);
        let colorTwo = () => (hex.length === 7) ? hex : "#d3d3d3";

        context.strokeStyle = colorTwo();
        console.log(`Color is ${colorTwo()}.`);
        console.log(`Coordinates are ${x}, ${y}.`);
        console.log(`Height is ${h} and width is ${w}.`);
        
        context.strokeRect(x, y, w, h);
    })

    /*
    document.addEventListener("click", (event) => {

        x = event.clientX;
        y = event.clientY;
        w = Math.random()*100
        h = Math.random()*100

        r = Math.random()*255
        g = Math.random()*255
        b = Math.random()*255

        context.strokeStyle = "rgb("+r+","+g+","+b+")";
        context.strokeRect(x, y, w, h);

    })
    */
})

