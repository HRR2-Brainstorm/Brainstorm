app.InterestActions = {
  get: function () {
    app.AppDispatcher.handleViewAction({
      actionType: app.InterestConstants.INTEREST_GET
    });
  },
  create: function (idea_id) {
    app.AppDispatcher.handleViewAction({
      actionType: app.InterestConstants.INTEREST_CREATE,
      idea_id: idea_id
    });
  },
  delete: function (_id) {
    app.AppDispatcher.handleViewAction({
      actionType: app.InterestConstants.INTEREST_DELETE,
      _id: _id
    });
  }
};
