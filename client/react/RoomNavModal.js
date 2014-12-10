app.RoomNavModal = React.createClass({

  render:function(){
    return (
      <div ref="body">
        <h2>Your Room:</h2>
        <a ref="room" onClick={this.props.handleClick}>http://localhost/_/rooms/{this.props.roomId}</a>
      </div>
    );
  }

});
