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
      <h3><a href="#" onClick={this.gotoRoom}>{this.props.name}</a></h3>
    );
  }
});