// dependencies
// bodyparser: returns input 
var express = require("express");

// tell node  we are creating "Express" server
var app = express();

// set initial PORT
var PORT = process.env.PORT || 7000;

app.use(express.static('app/public'))
//  set up the Express app to handle the parsing/ set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//  Routes: gives our server a map of how to respond when user visit or request data 
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



// Listener: makes server effectively start

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});



