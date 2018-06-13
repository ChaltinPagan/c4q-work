var app = require('express')();
var cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.json({jokes:[
        "Why did the chicken cross the road?",
        "Knock, knock. Who's there?",
        "How many sides to an orange?"
    ]});
});

app.listen(3100);