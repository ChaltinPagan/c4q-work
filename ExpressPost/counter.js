const express = require("express");
const app = express();
const bp = require("body-parser");
const fs = require("fs");

const port = 3000;



app.use(bp.urlencoded({ extended: false }));

app.use(bp.json());


//let obj = {};
// obj.count = 0;

app.get("/", (req, res) => {
    //obj.count = 0;
    //obj.count++

    // fs.readFile('counter.json', "utf8", (err, data) =>  {
    //     if (err) throw err;

    //     //obj.count += 1;
    //     res.send("Welcome to my site.");
    //     console.log(obj);
    //     console.log(req.params);
    //   })

    //cody solution
    let obj = {};

    fs.readFile("counter.json", "utf8", (err, data) => {
        if (err) {
            obj.count = 0;
        } else {
            obj = JSON.parse(data);
        }

        obj.count += 1;
        fs. writeFile("counter.json", JSON.stringify(obj), (err) => {
            if (err) throw err;
            res.end(`You viewed this page! ${obj.count} time(s).`);
        })
    })

})

app.post("/reset", (req, res) => {
    let obj = {};
    obj.count = 0;

    fs.writeFile('counter.json', JSON.stringify(obj) + "\n", (err) => {
        if (err) throw err;
        res.send("Counter reset.");
      })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})