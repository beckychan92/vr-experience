
console.info('starting webserver');

var boxapi = require('./boxapi.js');
var Express = require('express');

var webserver = new Express();

webserver.get('/data.json', function(request, response) {
	boxapi.getRootFileUrls(function(urls) {
		response.send(urls);
	});
});

webserver.get('/box-content-proxy/:id', function(request, response) {
	console.info('box content proxy requested',request.params.id);
	boxapi.streamFileContent(request.params.id, response);
});

webserver.use('/', Express.static('built/client'));

var port = 5050;

webserver.listen(port, function() {
	console.info('Express server started at http://localhost:' + port);
});
