/** @jsx React.DOM */
var React = require('react');
/*
var Actions = require('../actions/AppActions');
var Stores = require('../stores/AppStore');
var Constants = require('../constants/AppConstants');
*/
var EventStore = require('../stores/EventStore');
var ArtistStore = require('../stores/ArtistStore');
var EventWebAPIUtils = require('../utils/EventWebAPIUtils');

function getStateFromStores(){
  return {
    event: EventStore.getCurrEvent(),
    artists: ArtistStore.getArtists()
  };
}

var EventPage = React.createClass({
  getInitialState() {
    return getStateFromStores();
  },
  componentDidMount() {
    EventStore.addChangeListener(this._onChange)
    ArtistStore.addChangeListener(this._onChange);
    EventWebAPIUtils.getEvent(this.props.params.id);
  },
  render: function(){
    return (
      <div>
        <p>Event Name: {this.state.event.name}</p>
        <ul className="artistList">
          {this.state.artists.map(function(artist) {
            return <li key={artist.id} className={artist.onSpotify ? 'spotify' : 'noSpotify'}>{artist.name}</li>;
          })}
        </ul>
      </div>
    );
  },
  _onChange: function(){
    console.log('on change fromstore received');
    this.setState(getStateFromStores());
  }
});

module.exports = EventPage;
