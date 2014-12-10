app.InterestActions = {
  add: function(id) {
    app.AppDispatcher.handleViewAction({
      actionType: app.InterestConstants.INTEREST_CREATE,
      id: id
    });
  }
};
