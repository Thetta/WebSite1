var express = require('express');
var app = express();
 
app.use(express.static('project'));

app.get('/', function(req, res) {
   res.sendFile('project/index.html');
});

var port = process.env.PORT||5000;
console.log('server is running on port:',port) 
app.listen(port)