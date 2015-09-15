/** @jsx React.DOM */
var React = require('react');
const ReactRouter = require('react-router')
const Link = ReactRouter.Link
/*
var Actions = require('../actions/AppActions');
var Stores = require('../stores/AppStore');
var Constants = require('../constants/AppConstants');
*/

var FestivalSearchForm = React.createClass({
  handleSubmit: function(e){
    console.log('ayyy');
    console.log(React);
    e.preventDefault();
    var festival = this.refs.festival.getDOMNode().value.trim();
    this.props.onSearch({name: festival});
  },
  render: function() {
    console.log('festivalsearch');
    return (
      <form className="searchForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Search for a festival..." ref="festival" />
        <input type="submit" value="Search" />
      </form>
    );
  }
});

var HomePage = React.createClass({
  onSearchSubmit: function(festival){
    alert('Festival searched for is: ' + festival.name); 
  },
  render: function(){
    console.log('homepage');
    return (
      <div>
        <Link to='/event/10'>ayy</Link>
        <FestivalSearchForm onSearch={this.onSearchSubmit} />
      </div>
    );
  }
});

module.exports = HomePage;
