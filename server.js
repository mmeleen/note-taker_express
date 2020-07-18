// Dependencies
var express = require("express");

// Express Setup
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Start server - Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
