
var GameStream = require('gamestream');

var stream = new GameStream();

stream.on('data',function(update) {
	console.info(JSON.stringify(update));
});

stream.updateNow({
	test: 1,
	somethingElse: 2
});
	
setTimeout(function() {

	stream.updateNow({
		test: 3,
		somethingElse: 4,
		newThing: 5
	});

}, 1000);
