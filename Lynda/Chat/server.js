var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.use(express.static(__dirname))
app.use(bodyParser.json())

var messages = [    
    { "name": "Tim", "message": "Hi" },
    { "name": "Jane", "message": "Hello" }
]

app.get('/messages',(req,res) =>   {res.type('application/json'); res.send(messages)})

app.post('/messages',(req,res) =>   {
    messages.push(req.body);
    console.log(req.body);
    res.sendStatus(200)});
    var server = app.listen(3000, () => {console.log("server is listening on port", server.address().port )}
)