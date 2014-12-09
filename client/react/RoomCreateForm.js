app.RoomCreateForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    var roomname = this.refs.roomname.getDOMNode().value.trim();

    // TODO: send request to the server
    $.ajax({
      url: '/rooms/add',
      dataType: 'json',
      type: 'POST',
      data: roomname,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

    // Clear the form
    this.refs.roomname.getDOMNode().value = '';
    return;
  },

  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="roomname" placeholder="Room Name" />
        <input type="submit" value="Create Room" />
      </form>
    );
  }
});
