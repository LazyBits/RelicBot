module.exports = function(twitch_client, channel, user, message){
		console.log("hey");
		twitch_client.action(channel, "WOO");
};
