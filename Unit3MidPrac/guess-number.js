const express = require("express");
const app = express();

const port = 3000;

app.get("/:num", (req, res) => {
    let num = parseInt(req.params.num, 10);
    let obj = {};
    obj.guess = num;
    //console.log(JSON.parse(obj));
    
    if (num > 42) {
        obj.hint = "lower";

    } else if (num < 42) {
        obj.hint = "higher";
       
    } else if (num === 42) {
        obj.hint = "CORRECT";
        
    } else {
        obj.hint = "Guess a number.";
    }
    res.json(obj);
    res.end();
})

app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
})