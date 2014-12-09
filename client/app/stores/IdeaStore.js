var CHANGE_EVENT = 'change';
var _ideas = [];

var create = function(body) {
  $.ajax({
    type: 'POST',
    url: '/ideas',
    data: {body: body}
  })
  .done(function(idea) {
    _ideas.push(idea);
    app.IdeaStore.emitChange();
  })
  .fail(function(error) {
    console.log(error);
  });
};

app.IdeaStore = _.extend({}, EventEmitter.prototype, {
  getAll: function() {
    return _ideas;
  },

  all: function() {
    $.ajax({
      type: 'GET',
      url: '/ideas'
    })
    .done(function(ideas) {
      _ideas = ideas;
      this.emitChange();
    }.bind(this))
    .fail(function(error) {
      console.log(error)
    })
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
  var body;

  switch(action.actionType) {
    case app.IdeaConstants.IDEA_CREATE:
      body = action.body.trim();

      if (body !== '') {
        create(body);
      }
      break;

    default:
      return true;
  }
});
