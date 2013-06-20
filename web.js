var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('This is only a test. By the way. Hello World!');
});

app.get('/more', function(request, response) {
	response.send('This is to get more');
});

app.get('/again', function(request, response) {
	response.send('Testing some things again');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
