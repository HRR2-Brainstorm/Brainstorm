app.RoomActions = {
  create: function(name) {
    app.AppDispatcher.handleViewAction({
      actionType: app.RoomConstants.ROOM_CREATE,
      name: name
    });
  }
};
