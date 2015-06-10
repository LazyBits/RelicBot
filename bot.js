var irc = require('twitch-irc');

var fs = require('fs');
var identity = JSON.parse(fs.readFileSync('./configs/identity.json', 'utf8'));

var clientOptions = {
    options: {
        debug: true
    },
	identity: identity,
    channels: ['t3kk']
};

var twitch_client = new irc.client(clientOptions);

twitch_client.connect();

console.log("STUFF");

var scheduled_notices = require('./libs/scheduled_notices');

//scheduled_notices.sub_reminder(twitch_client, 't3kk', 10);

twitch_client.addListener('chat', function (channel, user, message) {
    console.log(user.username + ': ' + message);
    twitch_client.action(channel, "WEE");
    //chatHandler(twitch_client, channel, user, message)
});