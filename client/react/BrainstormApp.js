app.BrainstormApp = React.createClass({
  getInitialState: function() {
    return { indexView: true };
  },

  componentDidMount: function () {
    app.CommentStore.all();

    app.PageStore.addChangeListener(function(){

      //get state from the PageStore.currentRoute
      var state = app.PageStore.currentRoute;

      //if props is undefined set it to empty string
      state.props = state.props || '';
      state.indexView = (state.dest === 'welcome' ? true : false);
      this.setState(state);

      if(!state.indexView) {
        socket.emit('join', state.props);
      }
    }.bind(this));
  },

  render: function(){
    var currentView;
    if(this.state.indexView) { //thisIsHomePage
      currentView = <div>
        <app.User />
        <app.CreateRoom />
        <app.Rooms />
      </div>
    } else { // must be a room
      currentView = <div>

        <app.CreateIdea />
        <app.Ideas room_id={this.state.props}/>
        <app.CreateComment />
        <app.Comments />
      </div>
    }

    return (
      <div>
        <app.PageNav />
        <app.RoomNavModal roomId='0' />
        { currentView }
      </div>
    );
  }
});
