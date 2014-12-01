// count tweets from twitter
//
// Henry Chu Fall 2014

var ntwitter = require("ntwitter"),
    credentials = require("./credentials.json"),
    twitter;

// twitter object
twitter = ntwitter(credentials);

// set up twitter stream
twitter.stream(
	// string
	"statuses/filter",

	// object containing array of keywords
	{"track": ["ebola", "hurricane", "earthquake", "flood", "wildfire"]},

	// callback for when the stream is created
	function(stream) {
		stream.on("data", function(tweet) {
			// print out the tweet
			console.log(tweet.text);
		});  // done on
	}  // done callback
);  // done stream
