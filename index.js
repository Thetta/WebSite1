var express = require('express');
var app = express();
 
app.use(express.static('project'));

app.get('/', function(req, res) {
   res.sendFile('project/index.html');
});

console.log('server is running on port',process.env.PORT) 
app.listen(process.env.PORT||5000)