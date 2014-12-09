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
      this.rooms = rooms;
      this.emitChange();
    }.bind(this))
    .fail(function(error) {
      console.log(error);
    });
  },

  create: function(body) {
    $.ajax({
      type: 'POST',
      url: '/rooms',
      data: {body: body}
    })
    .done(function(room) {
      this._rooms.push(room);
      this.emitChange();
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
  var body;

  switch(action.actionType) {
    case app.RoomConstants.ROOM_CREATE:
      body = action.body.trim();

      if (body !== '') {
        app.RoomStore.create(body);
      }
      break;

    default:
      return true;
  }
});
