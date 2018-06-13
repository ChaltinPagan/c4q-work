const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {  
    res.send("Rock Paper Scissors API");   
})

app.get('/add/:num1/:num2', (req, res) => {
    const {num1, num2} = req.params;
    let sum = Number(req.params.num1) + Number(req.params.num2);
    res.send(`${num1} plus ${num2} is ${sum}.`);
});

app.get('/subtract/:num1/:num2', (req, res) => {
    const {num1, num2} = req.params;
    let sum = Number(req.params.num1)-+ Number(req.params.num2);
    res.send(`${num1} minus ${num2} is ${sum}.`);
});

app.get('/multiply/:num1/:num2', (req, res) => {
    const {num1, num2} = req.params;
    let sum = Number(req.params.num1) * Number(req.params.num2);
    res.send(`${num1} times ${num2} is ${sum}.`);
});

app.get('/divide/:num1/:num2', (req, res) => {
    const {num1, num2} = req.params;
    let sum = Number(req.params.num1) / Number(req.params.num2);
    res.send(`${num1} divided by ${num2} is ${sum}.`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})