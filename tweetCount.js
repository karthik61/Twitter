// count tweets from twitter
//
// Henry Chu Fall 2014

var ntwitter = require("ntwitter"),
    credentials = require("./credentials.json"),
    twitter,
    count = {};

// set up counters; initialize to 0
count.ebola = 0;
count.hurricane = 0;
count.earthquake = 0;
count.flood = 0;
count.wildfire = 0;

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
			// increment counter
			if (tweet.text.indexOf("ebola") > -1) {
				count.ebola = count.ebola + 1;
			}
		});  // done on
	}  // done callback
);  // done stream

// print ebola count every 2 seconds
setInterval(function () {
	console.log("ebola count:"+count.ebola);
}, 2000);

// export the JSON object count
module.exports = count;
