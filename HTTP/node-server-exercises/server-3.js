const http = require('http');

const fs = require("fs");

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write(stuff);
  res.end();
});

fs.readFile('index.html', function(err, data) {
    if (err) throw err;
    stuff = (data.toString());
});


const hostname = "localhost";

server.listen(port, hostname, () => {
  console.log(`Server running at on http://localhost:${port}`);
});