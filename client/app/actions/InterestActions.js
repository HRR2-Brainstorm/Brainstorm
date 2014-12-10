app.InterestActions = {
  add: function(ideaId) {
    app.AppDispatcher.handleViewAction({
      actionType: app.InterestConstants.INTEREST_CREATE,
      ideaId: ideaId
    });
  }
};
