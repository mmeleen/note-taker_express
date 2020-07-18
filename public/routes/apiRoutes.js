//Dependencies
var fs = require("fs");
var path = require("path");

// Unique ID counter
uniqueId = 4;

// Routes
module.exports = function(app) {
  // API GET Request
  app.get("/api/notes", function(req, res) {
    console.log("get");    
    let notes = JSON.parse(fs.readFileSync(path.join(__dirname, "../../db/db.json"), "utf8"));
    res.send(notes);
    console.log(notes);
  });

  // API POST Request
  app.post("/api/notes", function(req, res) {
    console.log("post");
    let newNote = req.body;
    newNote.id = uniqueId;
    uniqueId += 1;
    console.log(newNote, uniqueId);
  });

  // API DELETE
  app.delete("/api/notes/:id", function(req, res) {
    console.log("delete");
  });
};

