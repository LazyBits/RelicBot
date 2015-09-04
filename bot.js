var twitch_irc = require('tmi.js');
var irc = require('irc');

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

var twitch_client = new twitch_irc.client(clientOptions);

twitch_client.connect();

console.log("STUFF");

var scheduled_notices = require('./libs/scheduled_notices');
var chat_funtions = require('./libs/chat_functions');

//Reminds people to follow every 20 minutes
scheduled_notices.follow_reminder(twitch_client, 't3kk', '0 0,20,40 * * * *');
/*
//Set up IRC after twitch but before the listeners so that we can pass irc to twitch and twitch to irc if we decide to talk both ways
//TODO: hacky for now, set up as a module later.  Maybe module of things that commuicate with things other than twitch.
//For now we will start up irc right here for funzies
//TODO: remove hardcodes in future
var irc_client = irc.client('irc.speedrunslive.com','R3licBot',
{
  userName: 'R3licBot',
  realName: 'R3licBot irc client using npm\'s irc',
  port: 6667,
  secure: true,
  autoConnect: true,
  debug: true,
  showErrors: true
});

//When race is over bot says: RaceBot has changed the topic to: Status: Complete | Game: The Binding of Isaac: Rebirth | Goal: beat chest with judas (bos weekly 1.2 mod)

var currentRaceChannel = '';

irc_client.addListener('error', function (message) {
  console.log('error', message);
});

var getParticipants = function(channel){
  irc_client.say(channel, '.entrants');
}

var addRaceChannel = function(channel){
  irc_client.join(channel,)
}


var channel_regex = '/#[\w-]+\b/'

var parse_races = function(text){
  var races = text.split('\n');
  for each (var race in races){
    if (race.indexOf('Binding of Isaac: Rebirth')>-1) {
      //Get the channel
      var targetChannel = channel_regex.exec(race);
      addRaceChannel(targetChannel);
    }
  }
}

/**
*nick is sender's nick
*to is either the client or channel notice was sent to
*text is probaly jsut the text of the notice
*message is probably the message object
*/
/*
irc_client.addListener('notice', function(nick, to, text, message)){
  if(nick==='RaceBot'&&text.)
}

//Look for initates and rematch
irc_client.addListener('message#speedrunslive' function(nick, text, message){
  if (nick==='RaceBot'&&message.indexOf('initiated')>-1&&message.indexOf('Binding of Isaac: Rebirth')){
    //TODO: join channel
    var targetChannel = channel_regex.exec(message);
    addRaceChannel(targetChannel);
  }
});

irc_client.join('#speedrunslive',function(){
  irc_client.say('#speedrunslive', '.races');
});
*/
twitch_client.addListener('chat', function (channel, user, message) {
    chat_funtions(twitch_client, channel, user, message);
});
