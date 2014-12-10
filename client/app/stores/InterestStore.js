app.InterestStore = _.extend({}, EventEmitter.prototype, {
  _interests: [],

  add: function(ideaId) {
    $.ajax({
      type: 'POST',
      url: '/interests',
      data: {ideaId: ideaId}
    })
    .done(function(idea) {
    }.bind(this))
    .fail(function(error) {
      console.log(error);
    });
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

app.AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case app.InterestConstants.INTEREST_CREATE:
      ideaId = action.ideaId;

      if (ideaId !== '') {
        app.InterestStore.add(ideaId);
      }
      break;

    default:
      return true;
  }
});
