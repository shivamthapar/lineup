var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  receiveEventData: function(rawEvent){
    AppDispatcher.dispatch({
      type: AppConstants.ActionTypes.RECEIVE_EVENT_DATA,
      rawEvent: rawEvent
    });
  }
}

module.exports = AppActions
