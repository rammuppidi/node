    var fs = require('fs');
    var data = require("/Users/ramkumarmuppidi/Code/Node/Lynda/data1.json");
   console.log(data.name);


    fs.readFile('/Users/ramkumarmuppidi/Code/Node/Lynda/data1.json','utf-8', 
    function(error, data)
    {
        data = JSON.parse(data);
        console.log(data.name);
    })

    