
    // Requiering path
const path = require("path");

module.exports = function (app) {

    // Get request to 'index.html'
    app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // Get request  to 'notes.html'
    app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
    });



};