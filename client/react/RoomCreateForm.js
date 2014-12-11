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
        <input className="pure-u-1-1 pure-u-sm-5-6 postfix" type="text" ref="name" placeholder="Create a Room" />
        <button className="pure-u-1-1 pure-u-sm-1-6 button-small pure-button pure-button-primary no-margin" type="submit" ref="submit" >Create</button>
      </form>
    );
  }
});
