module.exports = function (twitch_client, channel, user, message) {
	//Using isMod because it detectes the broadcaster as well.  switch to user.special if it takes too long
	if (twitch_client.isMod(channel, user.username) && message.toLowerCase() === '!wordban') {
		console.log("!wordban cmmand detected");
		var turn_on = true;
		enabled_channels.forEach(function (enabled_channel) {
			if (enabled_channel === channel) {
				turn_on = false;
			}
		});
		
		//Add the channel to the array
		if (turn_on) {
			enabled_channels.push(channel);
		}
		//remove it form the array
		else {
			var index = enabled_channels.indexOf(channel);
			if (index > -1) {
				enabled_channels.splice(index, 1);
			}
		}
		console.log("HEY");
		console.log("taboo list " + enabled_channels);
	}

	enabled_channels.forEach(function (enabled_channel) {
		if (enabled_channel === channel) {
			if (message.toLowerCase().indexOf("taboo") > -1) {
				console.log("attempting to timeout " + user.username + " for message: " + message + "in channel " + channel);
				twitch_client.timeout(channel, user.username, 30);
			}
		}
	});
};

var enabled_channels = [];