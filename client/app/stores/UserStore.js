app.UserStore = _.extend({}, EventEmitter.prototype, {
  _user: null,

  get: function() {
    return this._user;
  },

  getCurrentUser: function() {
    $.get('/users')
    .done(function(user) {
      this._user = user;
      this.emitChange();
    }.bind(this))
    .fail(function(err) {
      console.log(err);
    });
  },

  logout: function() {
    $.ajax('/users', { type: 'DELETE'})
    .done(function(user) {
      this._user = user;
      this.emitChange();
    }.bind(this))
    .fail(function(err) {
      console.log(err);
    });
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener:function(callback){
    this.on(CHANGE_EVENT, callback);
  },
});