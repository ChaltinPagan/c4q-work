const app = require('express')();
const session = require('express-session');
const bp = require('body-parser');

const PORT = 3000;

app.use(session({
    secret: 'kitty cat'
}));

app.use(bp({
    extended: false
}))

app.get('/remember', (req, res) => {
    console.log("\n"+req.session.thisuser+"\n");
    // res.setHeader('Content-Type', 'text/html')
    res.send(`
        <h1>Remember</h1>
        <form method="post" action="/remember">
            <input name="thisuser" type="text"  >
        <button>submit</button>
        </form>
    `);
});

app.post('/remember', (req, res) => {
    //value of input name property
    let x = req.body.thisuser;
    req.session.thisuser = x;
    
    console.log(x);
    // res.setHeader('Content-Type', 'text/html');
    res.send(`Hi, ${req.session.thisuser}`);
    res.redirect('/remember');
});

app.listen(PORT, () => {
    console.log(`works on port ${PORT}.`)
});