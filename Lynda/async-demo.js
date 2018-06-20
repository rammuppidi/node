fs = require('fs');

// This is a anonymous callback function
fs.readdir('/Users/ramkumarmuppidi', function(err,data){console.log('data:', data)});


console.log("this comes after");