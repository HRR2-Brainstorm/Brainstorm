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
