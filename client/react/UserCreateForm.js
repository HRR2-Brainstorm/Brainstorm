app.UserCreateForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    var username = this.refs.username.getDOMNode().value.trim();

    // TODO: send request to the server
    this.refs.username.getDOMNode().value = '';
    return;
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="username" placeholder="Username" />
        <input type="submit" value="Create User" />
      </form>
    );
  }
});

React.render(<app.UserCreateForm />, document.getElementById('main'));