var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ArtistStore = require('./ArtistStore.js');

var ActionTypes = ChatConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _currentEventId = null;
var _events = {};

var EventStore = assign({}, EventEmitter.prototype, {
  init: function(rawEvents){
    rawEvents.forEach(function(e){
      var eventId = e.eventId;
      var event = {};
      event.eventId = e.eventId;
      event.name = e.name;
      event.tags = e.tags;
      event.artists = e.artists;
      // TODO: find artist by id and add that to store
      /*
      e.artists.forEach(function(name){
        var artist = ArtistStore.getByName(name);
        if(
      });
      */
      _events[eventId] = event;
    });
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  
});

