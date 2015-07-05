module.exports = function(twitch_client, channel, user, message){
		if(message in commands)
		{
			console.log('Running command ' + message)
			//Rigth now action is only a say commmand, maybe we shoudl expand this.
			twitch_client.say(channel, commands[message]);
		}
};

//Define commands here so that it will exist after the main function finishes.  This way we will only load commands once.
var commands = {};

function addCommand(newCommand, commandResult) {
	commands[newCommand] = commandResult;
	var fs = require('fs');
	fs.writeFileSync('./configs/commands.json', '{\n"commands": [\n');
	for(var saveCommand in commands)
	{
		var writeCommand = '{\n"trigger": "' + saveCommand + '",\n' + '"action": "' + commands[saveCommand] + '"\n},\n';
		console.log('Writing Command' + writeCommand);
		fs.appendFileSync('./configs/commands.json', writeCommand);
	}
	fs.appendFileSync('./configs/commands.json', "]\n}");
}

//Load commands from JSON
function loadCommands(filePath){
	var fs = require('fs');
	var commandsJSON = JSON.parse(fs.readFileSync(filePath, 'utf8')).commands;
	commandsJSON.forEach(function(command){
		addCommand(command['trigger'], command['action']);
	});
}

loadCommands('./configs/config.json');
