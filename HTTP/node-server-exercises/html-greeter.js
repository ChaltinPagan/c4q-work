const http = require('http');

const url = require("url");

const querystring = require("querystring");

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  let u = url.parse(req.url);
  let q = u.query;
  q = querystring.parse(q);
  //let name = u.query.slice(5, u.query.length).toUpperCase();
  

  console.log(u);
  console.log(q);

  res.write(
      `
      <!doctype html>
      <head>
        <title>Greeter</title>
      </head>
      <body>
        <h1> Hello ${q.name}! </h1>
      </body>
      </html>
      `
  );

  res.end();
  
});

const hostname = "localhost";

server.listen(port, hostname, () => {
  console.log(`Server running at on http://localhost:${port}`);
});