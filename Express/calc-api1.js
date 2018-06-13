const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {  
    res.send("Calculator API 1");   
})

app.get('/add/:num1/:num2', (req, res) => {
    var obj = {
        num1: req.params.num1,
        num2: req.params.num2
    };

    if (isNaN(parseInt(req.params.num1, 10))
    || isNaN(parseInt(req.params.num2, 10)) ) {
    res.send(`Please use numbers only.`);
    }

    let result = parseInt(req.params.num1, 10) + parseInt(req.params.num2, 10);
    obj.result = JSON.stringify(result);
    obj.math = "add";
    res.send(obj);
});

app.get('/subtract/:num1/:num2', (req, res) => {
    var obj = {
        num1: req.params.num1,
        num2: req.params.num2
    };

    if (isNaN(parseInt(req.params.num1, 10))
    || isNaN(parseInt(req.params.num2, 10)) ) {
    res.send(`Please use numbers only.`);
    }
    
    let result = parseInt(req.params.num1, 10) - parseInt(req.params.num2, 10);
    obj.result = JSON.stringify(result);
    obj.math = "subtract";
    res.send(obj);
});

app.get('/multiply/:num1/:num2', (req, res) => {
    var obj = {
        num1: req.params.num1,
        num2: req.params.num2
    };

    if (isNaN(parseInt(req.params.num1, 10))
    || isNaN(parseInt(req.params.num2, 10)) ) {
    res.send(`Please use numbers only.`);
    }

    let result = parseInt(req.params.num1, 10) * parseInt(req.params.num2, 10);
    obj.result = JSON.stringify(result);
    obj.math = "multiply";
    res.send(obj);
});

app.get('/divide/:num1/:num2', (req, res) => {
    var obj = {
        num1: req.params.num1,
        num2: req.params.num2
    };

    if (isNaN(parseInt(req.params.num1, 10))
    || isNaN(parseInt(req.params.num2, 10)) ) {
    res.send(`Please use numbers only.`);
    }

    let result = parseInt(req.params.num1, 10) / parseInt(req.params.num2, 10);
    obj.result = JSON.stringify(result);
    obj.math = "divide";
    res.send(obj);
});


app.get('/:other/:num1/:num2', (req, res) => {
    
    if (req.params.other) {
        res.send(`Please add, subtract, multiply or divide.`);
    } 
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})