const http = require('http');

const string = require("./template.js");

let stuff = string.string();
console.log("String posted.")

const port = 3000;

const server = http.createServer((req, res) => {;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write(stuff);
  res.end();
});


const hostname = "localhost";

server.listen(port, hostname, () => {
  console.log(`Server running at on http://localhost:${port}`);
});