app.CommentActions = {
  get: function () {
    app.AppDispatcher.handleViewAction({
      actionType: app.CommentConstants.COMMENT_GET
    });
  },
  create: function (idea_id, name) {
    app.AppDispatcher.handleViewAction({
      actionType: app.CommentConstants.COMMENT_CREATE,
      idea_id: idea_id,
      name: name
    });
  },
  edit: function (_id, name) {
    app.AppDispatcher.handleViewAction({
      actionType: app.CommentConstants.COMMENT_EDIT,
      _id: _id,
      name: name
    });
  },
  delete: function (_id) {
    app.AppDispatcher.handleViewAction({
      actionType: app.CommentConstants.COMMENT_DELETE,
      _id: _id
    });
  }
};
