
// Requiering path
const path = require("path");

module.exports = function (app) {

    //   Connecting to 'index.html'
    app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // Connectiong to 'notes.html'
    app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
    });



};