// Dependencies
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid"); // allows for unique ID generation

// Routes
module.exports = function(app) {
  // API GET Request
  app.get("/api/notes", function(req, res) {
    // console.log("get");    
    let notes = JSON.parse(fs.readFileSync(path.join(__dirname, "../../db/db.json"), "utf8"));
    res.send(notes);
    // console.log(notes);
  });

  // API POST Request
  app.post("/api/notes", function(req, res) {
    // console.log("post");
    let notesRead = JSON.parse(fs.readFileSync(path.join(__dirname, "../../db/db.json"), "utf8"));
    let newNote = req.body;
    newNote.id = uuidv4();
    // console.log(newNote.id);
    notesRead.push(newNote);
    let notesWrite = JSON.stringify(notesRead);
    fs.writeFileSync(path.join(__dirname, "../../db/db.json"), notesWrite, "utf8");
    // console.log(newNote);
    // console.log(notesRead);
    // console.log(notesWrite);
    res.end();
  });

  // API DELETE
  app.delete("/api/notes/:id", function(req, res) {
    // console.log("delete");
    // console.log(req.params.id);
    let notesRead = JSON.parse(fs.readFileSync(path.join(__dirname, "../../db/db.json"), "utf8"));
    let deleteId = req.params.id;
    let updatedNotes = JSON.stringify(notesRead.filter(el => el.id !== deleteId));
    fs.writeFileSync(path.join(__dirname, "../../db/db.json"), updatedNotes, "utf8");
    // console.log(updatedNotes);
    res.end();
  });
};

