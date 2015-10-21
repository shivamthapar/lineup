var Spotify = require('spotify-web-api-js');
var s = new Spotify();
var TESTING = true;

module.exports = {
  getArtistByName: function(name, callback){
    if(TESTING){
      callback({});
    }
    else{
      s.searchArtists(name, {"limit": 1})
        .then(function(data){
          if(data.artists.items.length <= 0){
            callback({});
          }
          else{
            var a = {};
            a.spotifyId = data.artists.items[0].id;
            a.spotifyUri = data.artists.items[0].uri;
            a.name = data.artists.items[0].name;
            callback(a);
          }
        }, function(err){
          console.log("error: ", err);
      });
    }
  }
}
