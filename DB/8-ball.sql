USE twitch_bot;

Create table 
8ball (
	id INT not null primary key AUTO_INCREMENT, 
	channel varchar(50), 
	username varchar(50), 
	runSuccess int,
	runFailure int,
	mostRecentSeed varchar(9), 
	mostRecentSeedComplete bool
);

INSERT INTO 8ball (`id`,`channel`,`username`,`runSuccess`, `runFailure`, `mostRecentSeed`,`mostRecentSeedComplete`) 
VALUES 	(NULL, "NuRelic", "Jayseesee",1,3,"fdas oe34", "T");