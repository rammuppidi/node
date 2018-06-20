var express=require('express');
var fs=require('fs');
var app = express();
app.use('/message', function(req,res){ 
    console.log('user requested endpoint');
    res.send('Hello');
    })

app.use('/users', function(req,res){

fs.readFile('./data1.json','utf-8', function(err,data){     
    data=JSON.parse(data)
    console.log(data);
});
})

app.use(express.static('/Users/ramkumarmuppidi/Code/Node/Lynda'));
app.listen(3000);