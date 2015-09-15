/** @jsx React.DOM */
var React = require('react');
var history = require('history');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;

/*
var Actions = require('../actions/AppActions');
var Stores = require('../stores/AppStore');
*/
var Constants = require('../constants/AppConstants');
var HomePage = require('../components/HomePage');
var EventPage = require('../components/EventPage');

var App = React.createClass({
    getInitialState: function(){
      return {
        page: Constants.Pages.HOME
      };
    },
    render:function(){
      /*
      var page;
      switch(this.state.page){
        case Constants.Pages.HOME: page = <HomePage />; break;
        case Constants.Pages.EVENT: page = <EventPage />; break;
      }
      */
      return (
        <div className="wrapper">
          <Link to='/'>Home</Link>
          <Link to='/events'>events</Link>
        </div>
      )
    }
  });

module.exports = App;
