
console.info('starting server');
var boxapi = require('./boxapi.js')
var express = require('express');
var app = express();

app.get('/data.json', function(req, res) {
	boxapi(function(data){
		res.send(data.toString());
	})
})

app.use('/', express.static('client'));

var port = 5050;

app.listen(port, function() {
	console.info('Express server started at http://localhost:' + port);
});
