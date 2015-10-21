var AppConstants = require('../constants/AppConstants');

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ArtistStore = require('./ArtistStore.js');

var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change';


var _currentEventId = null;
var _event = {};

var EventStore = assign({}, EventEmitter.prototype, {
  init: function(e){
      _event.eventId = e.id;
      _event.startDate = e.startDate;
      _event.endDate = e.endDate;;
      _event.name = e.name;
      _event.tags = e.tags;
      e.artists.forEach(function(artist){
        ArtistStore.addArtist(artist.name, function(added){
          if(added) console.log('artist ' + artist.name +' added.');
          else console.log('artist' + artist.name +' was not added');
        });
      });
  },
  getCurrEvent: function(){
    return _event;
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
    case ActionTypes.RECEIVE_EVENT_DATA:
      EventStore.init(JSON.parse(action.rawEvent));
      EventStore.emitChange();
      break;
  }
});

module.exports = EventStore;
