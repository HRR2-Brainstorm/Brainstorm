app.IdeaActions = {
  create: function(body) {
    app.AppDispatcher.handleViewAction({
      actionType: app.IdeaConstants.IDEA_CREATE,
      body: body
    });
  }
};
