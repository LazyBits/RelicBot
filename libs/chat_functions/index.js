var chat_functions = {};
chat_functions.cancer_mode = require('./word_ban.js');
chat_functions.chat_handler = require('./chat_handler.js');

//Get all the functions.  If we implement these like they have an interface we can run everything in the folder
var functions = Object.getOwnPropertyNames(chat_functions).filter(function (p) {
	return typeof chat_functions[p] === 'function';
});


module.exports = function(twitch_client, channel, user, message){
	console.log("functions loaded: "+functions);
	functions.forEach(function(element){
		chat_functions[element](twitch_client, channel, user, message);
	});
}
