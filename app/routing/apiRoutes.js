LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data
// ===============================================================================

var surveyData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // ---------------------------------------------------------------------------

    app.get("/api/survey", function (req, res) {
        res.json(surveyData);
    });


    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------

    //   app.post("/api/tables", function(req, res) {

    //   });

};
