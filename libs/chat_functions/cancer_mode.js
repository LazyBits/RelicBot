module.exports = function(twitch_client) {
	twitch_client.addListener('chat', function (channel, user, message) {
//		if (message.toLowerCase() === '!cancer' && user.special.indexOf('mod') >= 0) {
			console.log("tabooSet");
			console.log('mod: '+ (user.special.indexOf('mod') >= 0));
			//Stop adding listeners fool!  Manage a list of channels cancer is enabled on
			twitch_client.addListener('chat', function (channel, user, message) {
				twitch_client.action(channel, "HEY");
				console.log("taboo Triggered");
				if (message.toLowerCase().indexOf("taboo") > -1) {
					twitch_client.timeout(channel, user, 300);
				}
			});
			
//		}
	});
};