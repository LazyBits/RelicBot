var irc = require('twitch-irc');

var fs = require('fs');
var identity = JSON.parse(fs.readFileSync('./configs/identity.json', 'utf8'));

var clientOptions = {
    options: {
        debug: true
    },
	identity: identity,
    channels: ['nurelic']
}
var client = new irc.client(clientOptions);

client.connect();

client.addListener('chat', function (channel, user, message) {
    console.log(user.username + ': ' + message);
});