module.exports = function(twitch_client, channel, user, message){
		console.log("count "+ count);
		count = count+1;
		var commands = {};
		addCommand(commands, '!twitter', 'Follow NuRelic on twitter @ https://twitter.com/NuRelic21');
		addCommand(commands, '!yt', 'Check out previous and/or different content from NuRelic on youtube @ http://tinyurl.com/o26k66u');
		addCommand(commands, '!fb', 'Like NuRelic on facebook @ www.facebook.com/NuRelicTwitch');
		if(message in commands)
		{
			console.log('Running command ' + message)
			twitch_client.say(channel, commands[message]);
		}
};

var count = 0;
var addCommand = function(commandMap, newCommand, commandResult) {
	commandMap[newCommand] = commandResult;
}
