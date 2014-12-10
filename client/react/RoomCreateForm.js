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
      <form className="pure-form pure-g" ref="form" onSubmit={this.handleSubmit}>
        <input type="text" ref="name" placeholder="Room" />
        <button className="button-small pure-button pure-button-primary" type="submit" ref="submit" >Create Room</button>
      </form>
    );
  }
});
