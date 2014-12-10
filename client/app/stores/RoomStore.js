app.RoomStore = _.extend({}, EventEmitter.prototype, {
  _rooms: [],

  getAll: function() {
    return this._rooms;
  },

  all: function() {
    $.ajax({
      type: 'GET',
      url: '/rooms'
    })
    .done(function(rooms) {
      this._rooms = rooms;
      this.emitChange();
    }.bind(this))
    .fail(function(error) {
      console.log(error);
    });

    socket.on('room-change', function(currentRooms) {
      this._rooms = currentRooms;
      this.emitChange();
    }.bind(this));
  },

  create: function(name) {
    $.ajax({
      type: 'POST',
      url: '/rooms',
      data: {name: name}
    })
    .done(function(room) {
      this._rooms.push(room);

      // broadcast that _rooms has changed
      socket.emit('room-change', this._rooms);
      this.emitChange();

      app.PageActions.navigate({
        dest: 'rooms',
        props: room._id
      });
    }.bind(this))
    .fail(function(error) {
      console.log(error);
    });
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

app.AppDispatcher.register(function(payload) {
  var action = payload.action;
  var name;

  switch(action.actionType) {
    case app.RoomConstants.ROOM_CREATE:
      name = action.name.trim();

      if (name !== '') {
        app.RoomStore.create(name);
      }
      break;

    default:
      return true;
  }
});
