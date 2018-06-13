const express = require("express");
const app = express();
const morgan = require("morgan");

const port = 3000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
    
    res.send("Rock Paper Scissors API");
    
})

// var users = {};

app.get("/:choice", (req, res) => {
    var obj = {};
    obj.user = req.params.choice;
    
    var aiChoice = Math.random();
    aiChoice = (aiChoice < .33 ? 'rock':(aiChoice < .66) ? 'paper':'scissors');
    obj.ai = aiChoice;
    
    if (obj.user !== "rock" && obj.user !== "scissors" && obj.user !== "paper") {
        res.send("Please choose rock, paper, or scissors.")
    } else if (obj.user === obj.ai) {
        obj.result = 'tie';
    } else if (obj.user === 'rock' && obj.ai === 'scissors'
        || obj.user === 'scissors' && obj.ai === 'paper'
        || obj.user === 'paper' && obj.ai === 'rock') {
        obj.result = 'win';
    } else {
        obj.result = 'lose';
    }
    res.json(obj);

})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})