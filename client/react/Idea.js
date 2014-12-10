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

  addInterest: function(e){
    e.preventDefault();

    var ideaId = this.props._id;

    app.InterestActions.add(ideaId);

    // Todo: Change state/class to indicate the interest

    return;
  },

  render: function() {
    // if editing render edit form otherwise render "Edit Idea" button
    if (this.state.editing) {
      var editForm = <app.IdeaForm editing="true" name={this.props.name} key={this.props._id} _id={this.props._id} />
    }

    return (
      <div>
        <h3 ref="body">{this.props.name}</h3>
        <form className="pure-form" >
          {editForm}
          <button className="button-small pure-button pure-button-primary" onClick={this.edit}>{ this.state.editing ? 'Cancel' : 'Edit Idea'}</button>
          <button className="button-small pure-button pure-button-primary" onClick={this.delete}>Delete Idea</button>
          <button className="button-small pure-button pure-button-primary" onClick={this.addInterest}>Watch</button>
        </form>
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
