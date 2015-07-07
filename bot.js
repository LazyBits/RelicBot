var irc = require('tmi.js');

var fs = require('fs');
var identity = JSON.parse(fs.readFileSync('./configs/identity.json', 'utf8'));
var config = JSON.parse(fs.readFileSync('./configs/config.json', 'utf8'));
var channels = config.channels;

var clientOptions = {
    options: {
        debug: true,
        debugDetails: true,
        dev: true
    },
    logging: {
        enabled: true,
        rewrite: true
    },
	identity: identity,
    channels: channels
};

var twitch_client = new irc.client(clientOptions);

twitch_client.connect();

console.log("STUFF");

var scheduled_notices = require('./libs/scheduled_notices');
var chat_funtions = require('./libs/chat_functions');

//Reminds people to follow every 20 minutes
scheduled_notices.follow_reminder(twitch_client, 't3kk', '0 0,20,40 * * * *');

twitch_client.addListener('chat', function (channel, user, message) {
    chat_funtions(twitch_client, channel, user, message);
});
