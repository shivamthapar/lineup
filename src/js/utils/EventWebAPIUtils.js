var request = require('request')
var AppActions = require('../actions/AppActions.js')
module.exports = {
  getEvent: function(id){
    request('http://localhost:8080/api/event/'+id, function (error, response, body){
      console.log(body);
      AppActions.receiveEventData(body);
    });
  }
} 
