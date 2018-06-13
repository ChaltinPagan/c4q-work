const express = require("express");
const fs = require("fs");
const bp = require("body-parser");
const app = express();

const port = 3000;

app.use(bp.urlencoded({ extended: false }))

app.use(bp.json())

app.post('/number', (req, res) => {
    //res.setHeader('Access-Control-Allow-Origin', '*');
    //res.json(req.body);
    let obj = {};
    obj.number = req.body.number;

    if (!req.body.number) {
        res.statusCode = 500;
        res.send();
        return;
    }
    

    fs.writeFile('number.json', JSON.stringify(obj) + "\n", (err) => {
        if (err) throw err;

        res.send("number updated");
        
    });
    
});

app.get('/number', (req, res) => {

    fs.readFile("./number.json", 'utf8', (err, data) => {
      if (err) {
        return res.send("There is no number")
      };
      data = JSON.parse(data)
      res.send(`The number is: ${data.number}`);
      console.log(data);
    })
  })
  

app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})