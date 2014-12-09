app.UserAuth = React.createClass({
  getInitialState: function() {
    return { currentUser: app.UserStore.get() };
  },

  handleClick: function(e) {
    if(this.state.currentUser) {
      e.preventDefault();
      app.UserStore.logout();
    }
  },

  render: function(){
    var text = this.state.currentUser ? 'Logout' : 'Login';
    return (
      <div>
          <a className='auth-btn' onClick={this.handleClick} href='/auth'>{text}</a>
      </div>
    );
  },

  componentDidMount: function() {
    app.UserStore.addChangeListener(function() {
      if(this.isMounted()) {
        this.setState({ currentUser: app.UserStore.get() });
      }
    }.bind(this));
    app.UserStore.getCurrentUser();
  }

});
