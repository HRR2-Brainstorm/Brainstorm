app.RoomTitle = React.createClass({
  getInitialState: function() {
    return {
      room:
      _(app.RoomStore.getAll()).filter(function (room) {
        return room._id === this.props.room_id;
      },this)[0]
    };
  },

  componentDidMount: function() {
    app.RoomStore.addChangeListener(function() {
      if(this.isMounted()) {
        this.setState({ room:
          _(app.RoomStore.getAll()).filter(function (room) {
            return room._id === this.props.room_id;
          },this)[0]
        });
      }
    }.bind(this));
    app.RoomStore.all();
  },

  render: function() {
    var title;
    if (this.state.room){
      title = (<h1>{ this.state.room.name }</h1>)
    }

    return (
      <div className="room">
        {title}
      </div>
    );
  }
})
