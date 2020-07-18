//Dependencies
var fs = require("fs");
var path = require("path");

// Routes
module.exports = function(app) {
  // API GET Request
  app.get("/api/notes", function(req, res) {
    console.log("get");
  });

  // API POST Request
  app.post("/api/notes", function(req, res) {
    console.log("post");
  });

  // API DELETE
  app.delete("/api/notes/:id", function(req, res) {
    console.log("delete");
  });
};

