// dependencies
// bodyparser: returns input 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// tell node  we are creating "Express" server
var app = express();
// create app/ json parser
var jsonParser = bodyParser.json()

// set initial PORT
var PORT = process.env.PORT || 8080;

//  set up the Express app to handle the parsing/ set up middleware
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.api-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))



//  Routes: gives our server a map of how to respond when user visit or request data 
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



// Listener: makes server effectively start

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});



