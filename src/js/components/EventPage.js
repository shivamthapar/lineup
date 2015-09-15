/** @jsx React.DOM */
var React = require('react');
/*
var Actions = require('../actions/AppActions');
var Stores = require('../stores/AppStore');
var Constants = require('../constants/AppConstants');
*/

var EventPage = React.createClass({
  getInitialState() {
    return {eventId: null};
  },
  componentDidMount() {
    console.log(this.props.params);
    this.setState({
      eventId: this.props.params.id
    })
  },
  render: function(){
    return (
      <p>Event Id: {this.state.eventId}</p>
    );
  }
});

module.exports = EventPage;
