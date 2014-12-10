app.CommentStore = _.extend({}, EventEmitter.prototype, {
  _comments: [],

  getAll: function () {
    return this._comments;
  },

  //ajax requests
  //TODO: DRY out this code
  all: function () {
    $.ajax({
      type: 'GET',
      url: '/comments'
    })
    .done(function (comments) {
      this._comments = comments;
      this.emitChange();
    }.bind(this))
    .fail(function (error) {
      console.log(error);
    });

    socket.on('comment-change', function(currentComments) {
      this._comments = currentComments;
      this.emitChange();
    }.bind(this));
  },

  get: function(ideaId) {
    return _.filter(this._comments, function(comment) {
      return comment.idea_id === ideaId;
    });
  },

  create: function (idea_id, name) {
    idea_id = idea_id || '5487b6bcd45728763106ce12';
    $.ajax({
      type: 'POST',
      url: '/comments',
      data: {
        idea_id: idea_id,
        name: name
      }
    })
    .done(function (comment) {
      this._comments.push(comment);

      // broadcast that _comments has changed
      socket.emit('comment-change', this._comments);
      this.emitChange();
    }.bind(this))
    .fail(function (error) {
      console.log(error);
    });
  },

  edit: function (_id, name) {
    $.ajax({
      type: 'PUT',
      url: '/comments/' + _id,
      data: {
        name: name
      }
    })
    .done(function (commentEdit) {
      //find matching comment and update it
      this._comments.forEach(function (comment) {
        if (comment._id === commentEdit._id) {
          comment.name = commentEdit.name;
        }
      }.bind(this));

      // broadcast that _comments has changed
      socket.emit('comment-change', this._comments);
      this.emitChange();
    }.bind(this))
    .fail(function (error) {
      console.log(error);
    });
  },

  delete: function (_id) {
    $.ajax({
      type: 'DELETE',
      url: '/comments/' + _id
    })
    .done(function (oldComment) {
      //look through comments and splice out comment
      this._comments.forEach(function (comment, i) {
        if (comment._id === oldComment._id) {
          this._comments.splice(i, 1);
        }
      }.bind(this));

      // broadcast that _comments has changed
      socket.emit('comment-change', this._comments);
      this.emitChange();
    }.bind(this))
    .fail(function (error) {
      console.log(error);
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

app.AppDispatcher.register(function (payload) {
  var action = payload.action;
  var _id;
  var idea_id;
  var name;

  switch (action.actionType) {
    case app.CommentConstants.COMMENT_GET:
      app.CommentStore.all();
      break;

    case app.CommentConstants.COMMENT_CREATE:
      idea_id = action.idea_id;
      name = action.name.trim();

      if (name !== '') {
        app.CommentStore.create(idea_id, name);
      }
      break;

    case app.CommentConstants.COMMENT_EDIT:
      _id = action._id;
      name = action.name.trim();

      if (name !== '') {
        app.CommentStore.edit(_id, name);
      }
      break;

    case app.CommentConstants.COMMENT_DELETE:
      _id = action._id;

      app.CommentStore.delete(_id);
      break;

    default:
      return true;
  }

});
