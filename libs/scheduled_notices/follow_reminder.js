module.exports = function (twitch_client, channel, cron_time) {
	// Create a new cron job..
	var cronJob = twitch_client.utils.cronjobs(cron_time, function () {
		twitch_client.action(channel, 'TESTING');
	});

	// Start it in 3 seconds..
	cronJob.start();
};

//TODO: Alter this to load form JSON like chat_handler