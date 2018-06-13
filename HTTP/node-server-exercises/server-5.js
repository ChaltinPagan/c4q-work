const http = require('http');

const fs = require("fs");

const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  let u = url.parse(req.url);

    res.write(
        `<h1>Contents</h1>
        <p></p>
        <a href="/index">Index</a>
        <p></p>
        <a href="/page-2">Page 2</a>
        `
    );

  res.end();
  
});

fs.readFile('index.html', function(err, data) {
    if (err) throw err;
    stuffOne = (data.toString());
});

fs.readFile('page-2.html', function(err, data) {
    if (err) throw err;
    stuffTwo = (data.toString());
});

const hostname = "localhost";

server.listen(port, hostname, () => {
  console.log(`Server running at on http://localhost:${port}`);
});