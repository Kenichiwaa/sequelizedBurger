var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var db = require("./models");

var app = express();
// Serve static content for the app from the "public" directory in the application directory
app.use(express.static(__dirname + "/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
// app.use("/update", routes);
// app.use("/create", routes);

var PORT = process.env.PORT || 3000;
// listen on port 3000
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
});
