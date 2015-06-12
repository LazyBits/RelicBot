module.exports = function (twitch_client, channel, user, message) {
	console.log("tabooSet");
	//TOGGLE FOR NOW
	if ((user.special.indexOf('mod') >= 0) && message==='!cancer'){
		var turn_on = true;
		enabled_channels.forEach(function (enabled_channel){
			if (enabled_channel===channel){
				turn_on = false;
			}
		});
		
		//Add the channel to the array
		if(turn_on){
			enabled_channels.push(channel);
		}
		//remove it form the array
		else{
			var index = enabled_channels.indexOf(channel);
			if (index > -1){
				enabled_channels.splice(index,1);
			}
		}
	}
	
	console.log("taboo Triggered");
	if (message.toLowerCase().indexOf("taboo") > -1) {
		console.log("attempting to timeout "+ user.username + " for message: "+ message+ "in channel "+channel);
		twitch_client.timeout(channel, user.username, 300);
	}
};

var enabled_channels = [];