module.exports = {
	chatHandler: function(twitch_client, channel, user, message){
		twitch_client.action(channel, "Testing intervals!");
	},
}
