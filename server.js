// Dependencies
const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js");
const express = require("express");
// calling the express
const app = express();
// Port
const PORT = process.env.PORT || 3000;

// Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
//routes 
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
// asking for a listen
app.listen(PORT, ()=> console.log('Listening on: http://localhost:'+ PORT))



