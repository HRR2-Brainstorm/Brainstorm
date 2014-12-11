app.IdeaActions = {
  create: function(room_id, name) {
    app.AppDispatcher.handleViewAction({
      actionType: app.IdeaConstants.IDEA_CREATE,
      room_id: room_id,
      name: name
    });
  },

  edit: function(idea) {
    app.AppDispatcher.handleViewAction({
      actionType: app.IdeaConstants.IDEA_EDIT,
      idea: idea
    });
  },

  delete: function(idea) {
    app.AppDispatcher.handleViewAction({
      actionType: app.IdeaConstants.IDEA_DELETE,
      idea: idea
    });
  }
};
