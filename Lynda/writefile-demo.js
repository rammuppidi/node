const fs=require('fs');
var tomString = '{"name":"Tom"}';
fs.writeFile('tom.json',tomString);