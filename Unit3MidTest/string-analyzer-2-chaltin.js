const express = require("express");
const app = express();

const port = 3000;

app.get("/upper/:str", (req, res) => {
    let str = req.params.str;
    let obj = {};
    obj.original = str;
    obj.upper = str.toUpperCase();

    res.json(obj);
    res.end();
});

app.get("/lower/:str", (req, res) => {
    let str = req.params.str;
    let obj = {};
    obj.original = str;
    obj.lower = str.toLowerCase();

    res.json(obj);
    res.end();
});

app.get("/length/:str", (req, res) => {
    let str = req.params.str;
    let obj = {};
    obj.original = str;
    obj.length = str.length;

    res.json(obj);
    res.end();
});

app.get("/split/:str", (req, res) => {
    let str = req.params.str;
    let obj = {};
    obj.original = str;
    obj.split = str.split(" ");

    res.json(obj);
    res.end();
});


app.get("/includes/:str/:search", (req, res) => {
    let str = req.params.str;
    let search = req.params.search;
    let obj = {};
    obj.original = str;
    obj.search = search;
    obj.includes = str.includes(search);

    res.json(obj);
    res.end();
});

app.get("/slice/:str/:from/:to", (req, res) => {
    let str = req.params.str;
    let from = req.params.from;
    let to = req.params.to;
    let obj = {};
    obj.original = str;
    obj.from = from;
    obj.to = to;
    obj.slice = str.slice(from, to);

    res.json(obj);
    res.end();
});

app.get("/charAt/:str/:index", (req, res) => {
    let str = req.params.str;
    let index = req.params.index;
    let obj = {};
    obj.original = str;
    obj.index = index;
    obj.charAt = str.charAt(index);

    res.json(obj);
    res.end();
});

app.get("/", (req, res) => {
    //res.setHeader("Content-Type", "text/html");
    res.write(
        `
        <!DOCTYPE html>
        <head>
            <title>String Analyzer</title>
        </head>
        <body>
            <h1>STRING ANALYZER</h1>
            <ul>
                <li><a href="/upper/hello">Uppercase</a></li>
                <li><a href="/lower/HELLO">Lowercase</a></li>
                <li><a href="/length/abcdefghijklmnop">Length</a></li>
                <li><a href="/split/multiple words whoa">Split</a></li>
                <li><a href="/includes/asdf/f">Includes</a></li>
                <li><a href="/slice/hello/2/4">Slice</a></li>
                <li><a href="/charAt/ExpressJS/6">CharAt</a></li>
            </ul>
        </body>
        `
    );
    res.end();

});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});