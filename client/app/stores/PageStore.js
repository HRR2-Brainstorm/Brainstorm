app.PageStore = _.extend({}, EventEmitter.prototype, {

  //define routes for PageStore
  routes: {

    welcome: function(){
      return '/welcome';
    },

    //rooms route needs the roomId to route to
    rooms: function(roomId){
      return '/rooms/'+roomId;
    }

  },

  //dispatch event to render welcome
  welcome: function(){
    this.emitChange('welcome');
  },

  //dispatch event to render rooms
  rooms: function(roomId){
    this.emitChange('room', roomId);
  },

  emitChange: function(){
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

  //listen for navigate action
  switch(action.actionType) {
    case app.PageConstants.NAVIGATE:

      //get destination and properties from action
      body = action.body;

      //set currentRoute in store for views to access
      app.PageStore.currentRoute = body;

      //route application
      page(app.PageStore.routes[body.dest](body.props));
      break;

    default:
      return true;
  }

});

//page options
page({

  //prefix urls with #!
  hashbang: true,

  //prevent page dispatching
  dispatch: false
});

//on welcome route: call welcome route
page('/welcome', function(){
  app.PageStore.welcome();
});

//on rooms route: call rooms route and pass it room id
page('/rooms/:roomId', function(ctx){
  app.PageStore.rooms(ctx.params.roomId);
});
