// Dependencies

const express = require("express");
// Express
const app = express();
// Port local host 3000
const PORT = process.env.PORT || 3000;

// Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static("public"));
//Routes 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes.js")(app);
// Listening for client request

app.listen(PORT, ()=> console.log('Listening on: http://localhost:'+ PORT))



