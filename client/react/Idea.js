app.Idea = React.createClass({
  getInitialState: function() {
    return {
      editing: false
    };
  },

  componentDidMount: function() {
    app.IdeaStore.addChangeListener(function() {
      if(this.isMounted()) {
        this.setState({editing: false});
      }
    }.bind(this))
  },

  render: function() {
    if (this.state.editing) {
      var editForm = <app.IdeaForm editing="true" name={this.props.name} />
    } else {
      var editForm = undefined;
    }
    return (
      <div>
        <h3 ref="body">{this.props.name}</h3>
        <button onClick={this.edit}>Edit Idea</button>
        {editForm}
      </div>
    );
  },

  edit: function(e) {
    e.preventDefault();
    if (this.isMounted()) {
      this.setState({editing: !this.state.editing});
    }
  }
});