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

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});