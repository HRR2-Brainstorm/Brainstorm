app.Room = React.createClass({

  gotoRoom: function(e){
    e.preventDefault();
    app.PageActions.navigate({
      dest: 'rooms',
      props: this.props._id
    });
  },

  render: function() {
    return (
      <div className="room pure-u-1">
          <a href="#" onClick={this.gotoRoom}>{this.props.name}</a>
      </div>
    );
  }
});