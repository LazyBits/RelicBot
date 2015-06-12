module.exports = function(twitch_client, channel, user, message){
		console.log("count "+ count);
		count = count+1;
		twitch_client.action(channel, "WOO");
};

var count = 0;