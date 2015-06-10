var loop = function(interval, word){
	require('sleep').sleep(interval);
	console.log(word);
	loop(interval, word);
}

loop(10, "hello");