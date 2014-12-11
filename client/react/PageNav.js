app.PageNav = React.createClass({

  handleWelcome:function(){
    //dispatch a navigate to welcome on click
    app.PageActions.navigate({
      dest: 'welcome'
    });
  },

  render:function(){
    return (
      <header className="pure-g" ref="body">
        <div className="pure-u-1-2">
          <button className="pure-button" ref="welcome" onClick={this.handleWelcome}>Home</button>
        </div>
        <div className="login pure-u-1-2">
          <app.User />
        </div>
      </header>
    );
  }

});
