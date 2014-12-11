app.RoomNavModal = React.createClass({

  render:function(){
    return (
      <div ref="body">
        <h1>{this.props.name}</h1>
        <a ref="room" onClick={this.props.handleClick}>http://localhost/_/rooms/{this.props.roomId}</a>
      </div>
    );
  }

});
