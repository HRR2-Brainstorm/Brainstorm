app.RoomCreateForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    var roomBody = this.refs.body.getDOMNode();

    app.RoomActions.create(roomBody.value.trim());
    roomBody.value = '';
    return;
  },

  render: function(){
    return (
      <form ref="form" onSubmit={this.handleSubmit}>
        <input type="text" ref="body" placeholder="Room" />
        <input type="submit" ref="submit" value="Create Room" />
      </form>
    );
  }
});
