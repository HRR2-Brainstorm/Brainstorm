app.Idea = React.createClass({
  getInitialState: function() {
    // set initial editing state to false
    return {
      editing: false
    };
  },

  componentDidMount: function() {
    // add a change listener on the IdeaStore
    // this is needed when the edit comes back and emits a change
    // that will force the component to re-render
    app.IdeaStore.addChangeListener(function() {
      if(this.isMounted()) {
        this.setState({editing: false});
      }
    }.bind(this));
  },

  render: function() {
    // if editing render edit form otherwise render "Edit Idea" button
    if (this.state.editing) {
      var editForm = <app.IdeaForm editing="true" name={this.props.name} key={this.props._id} _id={this.props._id} />
    } else {
      var editForm = (<button onClick={this.edit}>Edit Idea</button>);
    }
    return (
      <div>
        <h3 ref="body">{this.props.name}</h3>
        {editForm}
        <button onClick={this.delete}>Delete Idea</button>
      </div>
    );
  },

  edit: function(e) {
    e.preventDefault();
    if (this.isMounted()) {
      this.setState({editing: !this.state.editing});
    }
  },

  delete: function(e) {
    e.preventDefault();
    if(this.isMounted()) {
      app.IdeaActions.delete({id: this.props._id});
    }
  }
});