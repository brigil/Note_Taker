// Dependencies

const express = require("express");
// express
const app = express();
// Port local host 8080
const PORT = process.env.PORT || 3000;

// Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static("public"));
//routes 
// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes.js")(app);
// listening for client request

app.listen(PORT, ()=> console.log('Listening on: http://localhost:'+ PORT))



