
console.info('starting server');

var express = require('express');
var app = express();

app.use('/', express.static('client'));

var port = 5001;

app.listen(port, function() {
	console.info('Express server started at http://localhost:' + port);
});
