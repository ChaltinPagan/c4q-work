const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
    //res.setHeader("Content-Type", "text/html");
    res.write(
        `
        <!DOCTYPE html>
        <head>
            <title>BEARS WEB RING INDEX</title>
        </head>
        <body>
            <h1>BEARS WEB RING INDEX</h1>
            <ul>
                <li><a href="/panda">Panda</a></li>
                <li><a href="/koala">Koala</a></li>
                <li><a href="/polar">Polar</a></li>
            </ul>
        </body>
        `
    );
    res.end();

});

app.get("/panda", (req, res) => {
    
    res.send(
        `
        <!DOCTYPE html>
        <head>
            <title>Panda</title>
        </head>
        <body>
            <h1>PANDA BEARS</h1>
            <p>Panda fact: The giant panda's diet is over 99% bamboo.</p>
            <a href="/koala">Koala</a>
            <a href="/polar">Polar</a>
        </body>
        `
    );
    res.end();
});

app.get("/koala", (req, res) => {
    
    res.send(
        `
        <!DOCTYPE html>
        <head>
            <title>KOALA BEARS</title>
        </head>
        <body>
            <h1>Koala</h1>
            <p>Koala fact: Koalas sleep up to 20 hours a day.</p>
            <a href="/panda">Panda</a>
            <a href="/polar">Polar</a>
        </body>
        `
    );
    res.end();
});

app.get("/polar", (req, res) => {
    
    res.send(
        `
        <!DOCTYPE html>
        <head>
            <title>Polar Bear</title>
        </head>
        <body>
            <h1>POLAR BEARS</h1>
            <p>Poalr Bear fact: Polar bears overheat at temperatures above 10 degress Celsius (50 degress Fahrenheit).</p>
            <a href="/panda">Panda</a>
            <a href="/koala">Koala</a>
        </body>
        `
    );
    res.end();
});
    

app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
})