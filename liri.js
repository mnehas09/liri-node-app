  var fs = require("fs");
  var request = require("request");
  var twitter = require("twitter");
  var keys = require('./keys.js');
  var twit = new twitter(keys);
  var argument = process.argv[2];
  var value = process.argv[3];
  var dataText = process.argv[4];
  // Twitter parameters
  var params = {
      "screen_name": "miken_12",
      "count": 20
  }

if(argument === "my-tweets"){
  twit.get('statuses/user_timeline', params, gotData);
  function gotData(error, data, response){
    var tweets = data;
    for(var i = 0; i < tweets.length; i++){
      console.log(tweets[i].text); 
      console.log(tweets[i].created_at); 
    }
  };
}