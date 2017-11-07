var express = require('express');
var app = express();

var redirectToHTTPS = require('express-http-to-https').redirectToHTTPS
 
app.use(express.static('project'));
app.use(redirectToHTTPS([], []));

app.get('/', function(req, res) {
   res.sendFile('project/index.html');
});

var port = process.env.PORT||5000;
console.log('server is running on port:',port) 
app.listen(port)
