/** @jsx React.DOM */
var React = require('react');
var ReactPropTypes = React.PropTypes;
var AppBar = require('material-ui/lib/app-bar');
var Paper = require('material-ui/lib/paper');
var classNames = require('classnames');
/*
var Actions = require('../actions/AppActions');
var Stores = require('../stores/AppStore');
var Constants = require('../constants/AppConstants');
*/
var EventStore = require('../stores/EventStore');
var ArtistStore = require('../stores/ArtistStore');
var EventWebAPIUtils = require('../utils/EventWebAPIUtils');


var Header = React.createClass({
  propTypes: {
    name: ReactPropTypes.string,
    startDate: ReactPropTypes.string,
    endDate: ReactPropTypes.string,
  },
  render: function(){
    return (
      <div className={"eventHeader"}>
        <h3 className={"eventName"}>{this.props.name}</h3>
        <p className={"eventDates"}>{(new Date(this.props.startDate)).toDateString()} - {(new Date(this.props.endDate)).toDateString()}</p>
      </div>
    );
  }

});

var EventPage = React.createClass({
  getInitialState() {
    return this.getStateFromStores();
  },
  componentDidMount() {
    EventStore.addChangeListener(this._onChange)
    ArtistStore.addChangeListener(this._onChange);
    EventWebAPIUtils.getEvent(this.props.params.id);
  },
  render: function(){
    return (
      <div>
        <AppBar title="Lineup" />
          <Header name={this.state.event.name} startDate={this.state.event.startDate} endDate={this.state.event.endDate} />
        <Paper zDepth={1} >
          <div style={{"overflow": "hidden"}}>
            <img style={{"width": "100%"}} src="/public/escape.jpg"/>
          </div>
          <Paper className="img-overlay" zDepth={1} style={{"height": "100px"}}>
          </Paper>
        </Paper>
        <ul className="artistList">
          {this.state.artists.map(function(artist) {
            return <li className={artist.onSpotify ? 'spotify' : 'noSpotify'}>{artist.name}</li>;
          })}
        </ul>
      </div>
    );
  },
  _onChange: function(){
    console.log('on change fromstore received');
    this.setState(this.getStateFromStores());
  },
  getStateFromStores: function(){
    return {
      event: EventStore.getCurrEvent(),
      artists: ArtistStore.getArtists()
    };
  }
});

module.exports = EventPage;
