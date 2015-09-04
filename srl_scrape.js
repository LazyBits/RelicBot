/**
* Scrape speedrunslive.com because racebot responds to .entrants with a notice
* and we don't want to have to synchronously request entrant lists.
*/

/**
*var is runtime
* function is parse time
*/
var request = require("request");

var speedrunslive_api_url = "http://api.speedrunslive.com/";
var race_endpoint = "races/"

//Should match on text after "entrant" and before a word boundry
var entrant_regex = '/(?<=entrant)\w+\b/'


//At parse time
function scrapeParticipants(raceID){

  var fullURI = speedrunslive_api_url+race_endpoint+raceID
  console.log(fullURI);
  request(
    {
      uri: fullURI
    },
    function(error, response, body){
      console.log(body);
    }
  );
};

scrapeParticipants('w0ea0');
