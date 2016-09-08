
require('./start-webpack.js');

console.info('starting server');
var boxapi = require('./boxapi.js')
var express = require('express');
var app = express();

app.get('/data.json', function(request, response) {
	boxapi.getRootFileUrls(function(urls) {
		response.send(urls);
	});
});

app.get('/box-content-proxy/:id', function(request, response) {
	console.info('box content proxy requested',request.params.id);
	boxapi.streamFileContent(request.params.id, response);
});

app.use('/', express.static('built/client'));

var port = 5050;

app.listen(port, function() {
	console.info('Express server started at http://localhost:' + port);
});
