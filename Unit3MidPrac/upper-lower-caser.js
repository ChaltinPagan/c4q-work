const express = require("express");
const app = express();

const port = 3000;

app.get("/string/:s/case/:c", (req, res) => {
    let s = req.params.s;
    let c = req.params.c;
    let obj = {};
    obj.original = s;
    obj.case = c;

    if (c === "upper") {
        obj.converted = s.toUpperCase();
        
        
    } else if (c === "lower"){
        obj.converted = s.toLowerCase();
        
        
    } else {
        obj.converted = s;
     
    }
    res.json(obj);
    res.end();
})

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
})