const express = require("express");
const app = express();
const bp = require("body-parser");
const fs = require("fs");

const port = 3000;

app.use(bp.urlencoded({ extended: false }));

app.use(bp.json());

app.post("/login", (req, res) => {
    
    // if (!req.body.username || !req.body.password) {
    //     return res.send("Invalid username/password.");
    // }
    un = req.body.username;
    pw = req.body.password;

    fs.readFile("./users.json", "utf8", (err, data) => {

        data = JSON.parse(data);
        //console.log(data);
        let x = data.filter( (el) => {
            // console.log(el.username);
            // console.log(el.password);
            return el.username === un && el.password === pw;

        })
        //console.log(data);
        console.log(x);
        // console.log(un);
        // console.log(pw);

        if (x.length) {
            res.send("You're in!");
        } else {
            res.send("Invalid username/password.");
        }

        // for (var i = 0; i < data.length; i++) {
        //     if (un !== data[i].username && pw !== data[i].password) {
        //         return res.send("Invalid username/password.");
                
        //     } else {
        //         return res.send("You're in!")
        //     }
        // }
        
    })


    //cody solution:
    // let x = users.map( el => {
    //     return el.username;
    // });
    // console.log(x.includes("name"));

    // let userinput = "name";
    // let userpass = "123";
    // let y = users.filter( el => {
    //     return el.username === userinput;
    // })
    // console.log(y);

    // if (y.length > 0) {
    //     if( y[0].password === userpass) {
    //         console.log("good");
    //     } else {
    //         console.log("bad");
    //     }
    // } else {
    //     console.log("bad name");
    // }

    // //cody solution 2:
    // let z = users.filter( el => {
    //     return el.username === userinput && el.password === userpass;
    // })
    // console.log(z);
    
})

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
})
