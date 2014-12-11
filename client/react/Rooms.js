app.Rooms = React.createClass({
  getInitialState: function() {
    return {
      rooms: app.RoomStore.getAll()
    };
  },

  componentDidMount: function() {
    app.RoomStore.addChangeListener(function() {
      if(this.isMounted()) {
        this.setState({ rooms: app.RoomStore.getAll() });
      }
    }.bind(this));
    app.RoomStore.all();
  },

  render: function() {
    var rooms = [];
    this.state.rooms.forEach(function(room) {
      rooms.push(<app.Room name={room.name} key={room._id} _id={room._id} />);
    });
    return (
      <div className="rooms">
        { rooms }
      </div>
    );
  }
})