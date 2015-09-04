//This file uses the random_alphanumeric file to create an 8-long string with a space in the middle. 
//This will be used for generating seeds in "The Binding of Isaac" and "The Binding of Isaac: Rebirth" 
module.exports = function (twitch_client, channel, user, message) {	
	var arr = message.match(/!seedGen(.*)/);
	if (arr != null) { // Did it match?
		var mysql      = require('mysql');
		var connection = mysql.createConnection({
			host     : '127.0.0.1',
			user     : 'root',
			password : '',
			database : 'twitch_bot'
		});

		connection.connect();

		connection.query('SELECT * from 8ball;', function(err, rows, fields) {
		if (!err)
			console.log('The solution is: ', rows);
		else
			console.log('Error while performing Query. ' +err );
		});
		var message = "";
		if ("#"+user.username == channel) {		
		//if (user.username in twitch_client.mods(channel)) {
			var generator = {};
			generator.random_alphanumeric = require('./utils/random_alphanumeric.js');
			var charSet = "abcdefghijklmnopqrstuvwxyz0123456789";	
			var genLen = 9;
			var stringSet = "Isaac,Maggy, Cain, Judas, ???, Eve, Samson, Azazel, Lazarus, Eden";
			var seed = generator.random_alphanumeric(genLen, charSet);
			if(arr[1])
			{
				message = "A new seed has been created for "+arr[1]+": "+seed;
			}
			else
			{
				message = "Error: you need to add a username at the end of the command "+user.username;
			}


			connection.end();
			twitch_client.say(channel, message);
		}		
	}	
};