const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
    //res.setHeader("Content-Type", "text/html");
    res.write(
        `
        <!DOCTYPE html>
        <head>
            <title>Animals</title>
        </head>
        <body>
            <h1>Animals</h1>
            <ol>
                <li><a href="/birds">Birds</a></li>
                <li><a href="/reptiles">Reptiles</a></li>
                <li><a href="/mammals">Mammals</a></li>
            </ol>
        </body>
        `
    );
    res.end();

});

app.get("/:animal", (req, res) => {
    res.setHeader("Content-Type", "text/html");

    let animal = req.params.animal;

    if (animal === "birds") {
        res.write(
            `
            <!DOCTYPE html>
            <head>
                <title>Birds</title>
            </head>
            <body>
                <h1>Birds</h1>
                <p>Birds fly.</p>
                <li><a href="/">Home</a></li>
            </body>
            `
        );
    } else if (animal === "reptiles") {
        res.write(
            `
            <!DOCTYPE html>
            <head>
                <title>Reptiles</title>
            </head>
            <body>
                <h1>Reptiles</h1>
                <p>A snake is a reptile.</p>
                <li><a href="/">Home</a></li>
            </body>
            `
        );
    } else if (animal === "mammals") {
        res.write(
            `
            <!DOCTYPE html>
            <head>
                <title>Mammals</title>
            </head>
            <body>
                <h1>Mammals</h1>
                <p>Humans are mammals.</p>
                <li><a href="/">Home</a></li>
            </body>
            `
        );
    }
    
    res.end();
})

app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
})