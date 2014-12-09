app.IdeaStore = _.extend({}, EventEmitter.prototype, {
  _ideas: [],

  getAll: function () {
    return this._ideas;
  },

  all: function () {
    $.ajax({
      type: 'GET',
      url: '/ideas'
    })
    .done(function (ideas) {
      this._ideas = ideas;
      // broadcast that _ideas has changed
      this.emitChange();
    }.bind(this))
    .fail(function(error) {
      console.error(error);
    });
  },

  create: function (name) {
    $.ajax({
      type: 'POST',
      url: '/ideas',
      data: {name: name}
    })
    .done(function (idea) {
      this._ideas.push(idea);
      // broadcast that _ideas has changed
      this.emitChange();
    }.bind(this))
    .fail(function(error) {
      console.error(error);
    });
  },

  edit: function(idea) {
    $.ajax({
      type: 'PUT',
      url: '/ideas/' + idea.id,
      data: idea
    })
    .done(function(ideaEdit) {
      // look through the ideas until finding a match
      // for id and then update the name property
      this._ideas.forEach(function(idea) {
        if(idea._id === ideaEdit._id) {
          idea.name = ideaEdit.name;
          // broadcast that _ideas has changed
          return this.emitChange();
        }
      }.bind(this));
    }.bind(this))
    .fail(function(error) {
      console.error(error);
    });
  },

  delete: function(idea) {
    $.ajax({
      type: 'DELETE',
      url: '/ideas/' + idea.id
    })
    .done(function(oldId) {
      // find deleted idea by oldId in _ideas and remove
      this._ideas.forEach(function(idea, index) {
        if(idea._id === oldId._id) {
          this._ideas.splice(index, 1);
          // broadcast that _ideas has changed
          return this.emitChange();
        }
      }.bind(this));
    }.bind(this))
    .fail(function(error) {
      console.error(error);
    });
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// register a callback function with the AppDispatcher
// that will respond to the IdeaConstants listed below
app.AppDispatcher.register(function (payload) {
  var action = payload.action;
  var name;

  switch (action.actionType) {
    case app.IdeaConstants.IDEA_CREATE:
      name = action.name.trim();

      if (name !== '') {
        app.IdeaStore.create(name);
      }
      break;
    case app.IdeaConstants.IDEA_EDIT:
      if(action.idea.name !== '') {
        app.IdeaStore.edit(action.idea);
      }
      break;
    case app.IdeaConstants.IDEA_DELETE:
      if(action.idea.id !== '') {
        app.IdeaStore.delete(action.idea);
      }
      break;
    default:
      return true;
  }
});
