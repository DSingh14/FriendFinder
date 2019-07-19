
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data
// ===============================================================================

var friendsArray = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);
    });


    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a survey... this data is then sent to the server...
    // Then the server saves the data to the survey html)
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {
        console.log(req.body)
        var newFriendMatch = friendsArray[Math.floor(Math.random() * friendsArray.length)]
        //write the logic that compares the new friend object to the friends.js object
        //do comparison with req.body.
        //then return that friend to survey.html
        res.json(newFriendMatch);
        friendsArray.push(req.body)

    });

};



