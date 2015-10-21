var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var history = require('history');
var IndexRoute = ReactRouter.IndexRoute;
var HomePage = require('./components/HomePage.js');
var EventPage = require('./components/EventPage.js');
var injectTapEventPlugin = require("react-tap-event-plugin");

injectTapEventPlugin();

const App = React.createClass({
  render() {
    return (
      <div id="wrapper">
        {this.props.children}
      </div>
    )
  }
})

React.render((
  <Router history={history.createHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="event/:id" component={EventPage} />
    </Route>
  </Router>
), document.body)
