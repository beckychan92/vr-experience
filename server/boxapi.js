var https = require("https");
var options = {
  host: "api.box.com",
  port: 443,
  path: "/2.0/folders/11207692482/items",
  headers: {
    "Authorization": "Bearer utuuZ76I0mFQKfYKKn512QzG7vnnlJ5o"
  },
  method: "GET"
}

function boxAPI(callback) {
  https.get(options, function(res) {
    console.log("statusCode: ", res.statusCode);
    console.log("headers: ", res.headers);

    res.on("data", function(d) {
     process.stdout.write(d);
     callback(d);
   });
  }).on("error", function(e) {
    console.error(e);
  });
}

module.exports = boxAPI;
