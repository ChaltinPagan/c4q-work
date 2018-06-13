const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write(`<h1>Welcome to My Site</h1>`);
  res.write(`<p>Content coming soon...</p>`);
  res.end();
});

const hostname = "localhost";

server.listen(port, hostname, () => {
  console.log(`Server running at on http://localhost:${port}`);
});