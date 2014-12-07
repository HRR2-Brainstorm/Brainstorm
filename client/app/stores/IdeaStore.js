var CHANGE_EVENT = 'change';
var _ideas = {};

var create = function(body) {

};

app.IdeaStore = _.extend({}, app.eventEmitter.prototype, {
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
  var body;

  switch(action.actionType) {
    case app.IdeaConstants.IDEA_CREATE:
      body = action.body.trim();
      if (body !== '') {
        create(body);
      }
      app.IdeaStore.emitChange();
      break;

    default:
      return true;
  }
});
