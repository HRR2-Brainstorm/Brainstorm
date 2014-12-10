app.InterestStore = _.extend({}, EventEmitter.prototype, {
  _interests: [],

  add: function(id) {
    $.ajax({
      type: 'POST',
      url: '/interests/add',
      data: {id: id}
    })
    .done(function(idea) {
      // this._ideas.push(idea);
      // this.emitChange();
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
      id = action.id.trim();

      if (id !== '') {
        app.InterestStore.add(id);
      }
      break;

    default:
      return true;
  }
});
