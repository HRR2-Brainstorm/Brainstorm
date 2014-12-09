app.RoomNavModal = React.createClass({

  handleClick:function(){
    //dispatch a navigation event
    app.PageActions.navigate({
      dest: 'rooms',
      //submit the roomId to the event
      props: this.props.roomId
    });
  },

  render:function(){
    return (
      <div ref="body">
        <h2>Your Room:</h2>
        <a ref="room" onClick={this.handleClick}>http://localhost/_/rooms/{this.props.roomId}</a>
      </div>
    );
  }

});
