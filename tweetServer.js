// Express server with a static file directory
//
// Henry Chu, Fall 2014

var express = require("express"),
    http = require("http"),
    tweetCounts = require("./tweetCount3.js"),
    app;

// set up a static file directory for default routing
app = express();
app.use(express.static(__dirname + "/client"));

// create an express http server and listen on port 3000
http.createServer(app).listen(3000);

// set up routes
app.get("/counts.json", function(request, response) {
	// respond with tweetCounts json object
	response.json(tweetCounts);
}); // done get counts.json
