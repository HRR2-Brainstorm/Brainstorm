app.RoomCreateForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    var roomName = this.refs.name.getDOMNode();

    app.RoomActions.create(roomName.value.trim());
    roomName.value = '';
    return;
  },

  render: function(){
    return (
      <form ref="form" onSubmit={this.handleSubmit}>
        <input type="text" ref="name" placeholder="Room" />
        <input type="submit" ref="submit" value="Create Room" />
      </form>
    );
  }
});
