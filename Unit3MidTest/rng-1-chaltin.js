const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
    //res.setHeader("Content-Type", "text/html");
    res.write(
        `
        <!DOCTYPE html>
        <head>
            <title>Random Number Generator</title>
        </head>
        <body>
            <h1>RANDOM NUMBER GENERATOR</h1>
            <ul>
                <li><a href="/random">Random from 0 to 9</a></li>
                <li><a href="/random/99">Random from 0 to 99</a></li>
                <li><a href="/random/1/100">Random from 1 to 100</a></li>
            </ul>
        </body>
        `
    );
    res.end();

});

app.get("/random", (req, res) => {
    let obj = {};
    obj.from = 0;
    obj.to = 9;
    obj.random = Math.floor(Math.random()*10);

    res.json(obj);
    res.end();
})

app.get("/random/:to", (req, res) => {
    let to = req.params.to;
    let obj = {};
    obj.from = 0;
    obj.to = parseInt(to, 10);
    obj.random = Math.floor(Math.random()*to);

    res.json(obj);
    res.end();
})

app.get("/random/:from/:to", (req, res) => {
    let from = req.params.from;
    let to = req.params.to;
    let obj = {};
    obj.from = parseInt(from, 10);
    obj.to = parseInt(to, 10);
    obj.random = Math.floor(Math.random() * (to - from) + from);

    res.json(obj);
    res.end();
})


app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
})