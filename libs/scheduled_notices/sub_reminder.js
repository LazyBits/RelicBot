module.exports = function(twitch_client, channel, interval){
		var helper = function(twitch_client, channel, interval){
			twitch_client.action(channel, "Testing intervals!").then(helper(twitch_client, channel, interval));
			console.log("WOO");
			helper(twitch_client, channel, interval);
		};
		helper(twitch_client, channel, interval);
};