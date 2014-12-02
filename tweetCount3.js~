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

console.log("My error: " + credentials);
console.log("consumer_key: " + credentials['consumer_key']);
console.log("consumer_secret: " + credentials['consumer_secret']);
console.log("access_token_key: " + credentials['access_token_key']);
console.log("access_token_secret: " + credentials['access_token_secret']);




twitter = ntwitter(credentials);
console.log("My error: " + twitter);


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
	else if(tweet.text.indexOf("hurricane") > -1)
	{
		count.hurricane = count.hurricane + 1;
		client.incr("hurricane");				
	}
	else if(tweet.text.indexOf("earthquake") > -1)
	{
		count.earthquake = count.earthquake + 1;
		client.incr("earthquake");				
	}
	else if(tweet.text.indexOf("flood") > -1)
	{
		count.flood = count.flood + 1;
		client.incr("flood");				
	}
	else if(tweet.text.indexOf("wildfire") > -1)
	{
		count.wildfire = count.wildfire + 1;
		client.incr("wildfire");				
	}


			}); 
                     	stream.on('error', function(error, code) {
    			console.log("My error: " + error + ": " + code);
			});
			// done on
		}  // done callback
	);  // done stream



});  // done client get

// export the JSON object count
module.exports = count;
