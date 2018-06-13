const filterFilesFn = require("./filterFiles.js").list;

const fs = require('fs');
const path = require('path');

let folder = process.argv[2];
console.log(`The folder is ${folder}.`)

let ext = '.' + process.argv[3];
console.log(`The file extension is ${ext}.`)

//console.log(process.argv);

filterFilesFn(folder, ext, (err, files) => {
    // answer goes in here
    fs.readdir('.', (err, files) => {
        let x = files.filter( (el) => {
          return path.extname(el) === '.txt';
        });
        console.log(x);
      });
      
});