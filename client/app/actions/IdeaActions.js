app.IdeaActions = {
  create: function(name) {
    app.AppDispatcher.handleViewAction({
      actionType: app.IdeaConstants.IDEA_CREATE,
      name: name
    });
  },

  edit: function(idea) {
    app.AppDispatcher.handleViewAction({
      actionType: app.IdeaConstants.IDEA_EDIT,
      idea: idea
    });
  }
};
