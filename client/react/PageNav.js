app.PageNav = React.createClass({

  handleWelcome:function(){
    //dispatch a navigate to welcome on click
    app.PageActions.navigate({
      dest: 'welcome'
    });
  },

  render:function(){
    return (
      <div ref="body">
        <button ref="welcome" onClick={this.handleWelcome}>Home</button>
      </div>
    );
  }

});
