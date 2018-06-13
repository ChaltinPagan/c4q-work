const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(homepage);
});

app.get('/cody', (req, res) => {
  res.json({
    msg: 'hello cody!'
  });
});

app.get('/play/:choice', (req, res) => {
  var obj = {};
  rps = Math.random();
  rps = (rps < .33 ? 'rock':(rps < .66) ? 'paper':'scissors');
  obj.user = req.params.choice;
  obj.comp = rps;
  if (obj.user === obj.comp) {
    obj.result = 'tie';
  } else if (obj.user === 'rock' && obj.comp === 'scissors'
      || obj.user === 'scissors' && obj.comp === 'paper'
      || obj.user === 'paper' && obj.comp === 'rock') {
    obj.result = 'win';
  } else {
    obj.result = 'lose';
  }

  res.json(obj);
});

app.listen(9998);

let homepage = `
  <html>
  <head>
  <link href="mid-unit-test.css"
        type="text/css" rel="stylesheet">
  <script src="mid-unit-test.js"></script>
  </head>
  <body>
  <p id="responseP"></p>
  <button id="codyB">Cody Button!</button>
  <button id="rockB">Rock</button>
  <button id="paperB">Paper</button>
  <button id="scissorsB">Scissors</button>
  </body>
  </html>
`;
