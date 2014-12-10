app.BrainstormApp = React.createClass({
  getInitialState: function() {
    return {
      indexView: true,
      currentUser: app.UserStore.get()
    };
  },

  componentDidMount: function () {
    app.UserStore.addChangeListener(function() {
      if(this.isMounted()) {
        this.setState({ currentUser: app.UserStore.get() });
      }
    }.bind(this));

    app.PageStore.addChangeListener(function(){

      //get state from the PageStore.currentRoute
      var state = app.PageStore.currentRoute;

      //if props is undefined set it to empty string
      state.props = state.props || '';
      state.indexView = (state.dest === 'welcome' ? true : false);
      if (state.dest === 'rooms'){
        setTimeout(function () {
          app.PageActions.getRoomData(state.props);
        }, 0);
      }
      this.setState(state);

      if(!state.indexView) {
        socket.emit('join', state.props);
      }
    }.bind(this));
  },

  render: function(){
    var currentView;
    if(this.state.indexView) { //thisIsHomePage
      currentView = (
        <div>
          <app.CreateRoom />
          <app.Rooms />
        </div>
      );
    } else { // must be a room
      currentView = (
        <div>
          <app.CreateIdea room_id={this.state.props}/>
          <app.Ideas room_id={this.state.props}/>
        </div>
      );
    }

    return (
      <div className={'user-' + !!this.state.currentUser} >
        <app.PageNav />
        { currentView }
      </div>
    );
  }
});
