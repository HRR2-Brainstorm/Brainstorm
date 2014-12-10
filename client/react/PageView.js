app.PageView = React.createClass({

  getInitialState: function(){
    return app.PageStore.currentRoute || {dest: 'welcome'};
  },

  componentDidMount: function(){
    //add a change listener for the page store on routing
    app.PageStore.addChangeListener(function(){

      //get state from the PageStore.currentRoute
      var state = app.PageStore.currentRoute;

      //if props is undefined set it to empty string
      state.props = state.props || '';
      this.setState(state);
    }.bind(this));
  },

  render: function(){
    return (
      <div ref="body">
        You are in {this.state.dest + (this.state.props || '')}
      </div>
    );
  }

});
