app.RoomActions = {
  create: function(body) {
    app.AppDispatcher.handleViewAction({
      actionType: app.RoomConstants.ROOM_CREATE,
      body: body
    });
  }
};
