var https = require("https");

var BEARER = 'utuuZ76I0mFQKfYKKn512QzG7vnnlJ5o';

var options = {
  host: "api.box.com",
  port: 443,
  headers: {
    "Authorization": "Bearer " + BEARER
  },
  method: "GET"
};

var boxAPI = {
  getRootFolderInfo: function(callback) {
    return this.getFolderInfo(11207692482, callback);
  },
  getFolderInfo: function(id, callback) {

    var path =  "/2.0/folders/" + id + "/items";
    var opts = Object.assign({}, options);
    opts.path = path;

    https.get(opts, function(res) {
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
};

module.exports = boxAPI;
