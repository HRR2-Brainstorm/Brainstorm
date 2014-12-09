app.PageActions = {
  navigate: function(body) {
    app.AppDispatcher.handleViewAction({
      actionType: app.PageConstants.NAVIGATE,
      body: body
    });
  }
};
