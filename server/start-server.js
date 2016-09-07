
console.info('starting server');
var boxapi = require('./boxapi.js')
var express = require('express');
var app = express();

app.get('/data.json', function(req, res) {
	boxapi.getRootFolderInfo(function(data){
		data = JSON.parse(data.toString());
		var count = data.entries.length;
		for (var i=0; i<count; i++) {
			data.entries[i].url = "";
		}
		res.send(data);
	})
})

app.use('/', express.static('client'));

var port = 5050;

app.listen(port, function() {
	console.info('Express server started at http://localhost:' + port);
});
