const http = require('http');

const fs = require("fs");

const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  let u = url.parse(req.url);
  

  console.log(u);

  if (u.query.startsWith("name")) {
    let name = u.query.slice(5, u.query.length).toUpperCase();
    res.write(`Hello ${name}!`);
    res.end();
  
  } else {
    res.write(`Please provide a name`);
    res.end();
  }
    
  
});

const hostname = "localhost";

server.listen(port, hostname, () => {
  console.log(`Server running at on http://localhost:${port}`);
});