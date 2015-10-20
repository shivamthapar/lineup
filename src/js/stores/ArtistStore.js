var AppConstants = require('../constants/AppConstants');

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var spotify = require('../utils/SpotifyAPI');


var _artists = [];

var ArtistStore = assign({}, EventEmitter.prototype, {
  addArtist: function(name, callback){
    spotify.getArtistByName(name, function(artist){
      if(Object.keys(artist).length!=0){
        artist.onSpotify = true;
        _artists.push(artist);
        callback(true)
      }
      else{
        // TODO: remove artist.id default
        artist.id=0;
        artist.name = name;
        artist.onSpotify = false;
        _artists.push(artist);
        callback(false);
      }
      ArtistStore.emitChange();
    });
  },
  getArtists: function(){
    return _artists;
  },
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  
});

AppDispatcher.register(function(action){
  switch(action.type){
  }
});

module.exports = ArtistStore;
