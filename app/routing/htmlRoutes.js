//Dependencies
// path package to get correct path file for html
var path = require("path");

// Routing
module.exports = function (app) {
    //  HTML get request for navigation from home page to survey page
    //  user enters survey via HTMl file
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    // if survey result is shown, back to home page
    app.use("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};

