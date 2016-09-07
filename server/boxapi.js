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
  getRootFileUrls: function(callback) {

    var results = [];
    var self = this;

    self.getRootFolderInfo(function(folderData) {

      var fileResponses = 0;
      var expectedCount = folderData.entries.length;

      folderData.entries.forEach(function(folderItem) {

        self.getFileInfo(folderItem.id, function(fileInfo) {

          if (fileInfo.shared_link) {
            results.push(fileInfo.shared_link.download_url);
          }

          fileResponses++;
          if (fileResponses === expectedCount) {
            callback(results);
          }

        });

      });

    });
  },
  getFolderInfo: function(id, callback) {
    var path =  "/2.0/folders/" + id + "/items";
    this._makeRequest(path, callback);
  },
  getFileInfo: function(id, callback) {
    var path =  "/2.0/files/" + id;
    this._makeRequest(path, callback);
  },
  _makeRequest: function(path, callback) {
    var opts = Object.assign({}, options);
    opts.path = path;

    https.get(opts, function(res) {

      res.on("data", function(d) {
        var obj = JSON.parse(d.toString());
        callback(obj);
     });
    }).on("error", function(e) {
      console.error(e);
    });
  }
};

module.exports = boxAPI;
