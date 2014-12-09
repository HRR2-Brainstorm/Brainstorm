app.IdeaStore = _.extend({}, EventEmitter.prototype, {
  _ideas: [],

  getAll: function() {
    return this._ideas;
  },

  all: function() {
    $.ajax({
      type: 'GET',
      url: '/ideas'
    })
    .done(function(ideas) {
      this._ideas = ideas;
      this.emitChange();
    }.bind(this))
    .fail(function(error) {
      console.log(error);
    });
  },

  create: function(name) {
    $.ajax({
      type: 'POST',
      url: '/ideas',
      data: {name: name}
    })
    .done(function(idea) {
      this._ideas.push(idea);
      this.emitChange();
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
  var name;

  switch(action.actionType) {
    case app.IdeaConstants.IDEA_CREATE:
      name = action.name.trim();

      if (name !== '') {
        app.IdeaStore.create(name);
      }
      break;

    default:
      return true;
  }
});
