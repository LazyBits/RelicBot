var irc = require('twitch-irc');

var clientOptions = {
    options: {
        debug: true
    },
	identity: {
        username: 't3kk',
        password: ''//Oauth key goes here
    },
    channels: ['nurelic']
}
var client = new irc.client(clientOptions);

client.connect();

client.addListener('chat', function (channel, user, message) {
    console.log(user.username + ': ' + message);
});