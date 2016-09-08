var https = require('follow-redirects').https;

var BEARER = require('./bearer.js');

var options = {
  host: "api.box.com",
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

      folderData.entries.forEach(function(folderItem) {
        results.push('/box-content-proxy/' + folderItem.id);
      });

      callback(results);

    });
  },
  getFolderInfo: function(id, callback) {
    var path =  "/2.0/folders/" + id + "/items";
    this._getApiJson(path, callback);
  },
  getFileInfo: function(id, callback) {
    var path =  "/2.0/files/" + id;
    this._getApiJson(path, callback);
  },
  streamFileContent: function(id, stream) {
    var path = "/2.0/files/" + id + "/content";
    this._streamApiFile(path, stream);
  },
  _getApiJson: function(path, callback) {
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
  },
  _streamApiFile: function(path, stream) {
    var opts = Object.assign({}, options);
    opts.path = path;

    https.get(opts, function(res) {
      res.pipe(stream);
    }).on("error", function(e) {
      console.error(e);
    });
  }
};

module.exports = boxAPI;
