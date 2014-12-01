// count tweets from twitter
//
// Henry Chu Fall 2014

var ntwitter = require("ntwitter"),
    credentials = require("./credentials.json"),
    twitter,
    redis = require("redis"),
    redisClient,
    count = {};

// set up counters; initialize to 0
count.ebola = 0;
count.hurricane = 0;
count.earthquake = 0;
count.flood = 0;
count.wildfire = 0;

// twitter object
twitter = ntwitter(credentials);

// create a client to connect to Redis
client = redis.createClient();

// callback from client.get
client.get("ebola", function(error, ebolaCount) {

	// check for error
	if (error !== null) {
		console.log("Error: "+error);
		return; // exit
	}

	// initialize counter to stored value
	count.ebola = parseInt(ebolaCount, 10) || 0;

	// set up twitter stream
	twitter.stream(
		// string
		"statuses/filter",

		// object containing array of keywords
		{"track": ["ebola", "hurricane", "earthquake", "flood", "wildfire"]},

		// callback for when the stream is created
		function(stream) {
			stream.on("data", function(tweet) {
				// increment counter
				if (tweet.text.indexOf("ebola") > -1) {
					count.ebola = count.ebola + 1;
					// increment the key on the client
					client.incr("ebola");
				}
			});  // done on
		}  // done callback
	);  // done stream

});  // done client get

// export the JSON object count
module.exports = count;
