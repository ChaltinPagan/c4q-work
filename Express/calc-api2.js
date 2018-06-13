const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {  
    res.send("Calculator API 2");   
})

app.get("/:operator/:num1/:num2", (req, res) => {
    var operator = req.params.operator;
    var num1 = parseInt(req.params.num1);
    var num2 = parseInt(req.params.num2);
    console.log(req.params);

    var obj = {
        operator: req.params.operator,
        num1: req.params.num1,
        num2: req.params.num2
    };

    var result;

    if (isNaN(parseInt(req.params.num1, 10))
    || isNaN(parseInt(req.params.num2, 10)) ) {
    res.send(`Please use numbers only.`);
    } else if (operator === "add") {
        obj.result = JSON.stringify(num1 + num2);
        obj.operator = "add";
        
    } else if (operator === "subtract") {
        obj.result = JSON.stringify(num1 - num2);
        obj.operator = "subtract";
        
    } else if (operator === "multiply") {
        obj.result = JSON.stringify(num1 * num2);
        obj.operator = "multiply";
        
    } else if (operator === "divide") {
        obj.result = JSON.stringify(num1 / num2);
        obj.operator = "divide";
        
    } else {
        res.send(`Please add, subtract, multiply or divide two numbers.`);
    }
    res.json(obj);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})