var https = require("https");
var options = {
  host: "api.box.com",
  port: 443,
  path: "/2.0/folders/11207692482/items",
  headers: {
    "Authorization": "Bearer BJLd2xm53H33kvY40c780tEWWRy7Wcyz"
  },
  method: "GET"
}

function boxAPI () {
  https.get(options, function(res) {
    console.log("statusCode: ", res.statusCode);
    console.log("headers: ", res.headers);

    res.on("data", function(d) {
     process.stdout.write(d);
   });
  }).on("error", function(e) {
    console.error(e);
  });
}

module.exports = boxAPI;
