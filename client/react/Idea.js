app.Idea = React.createClass({

  getInitialState: function() {
    // set initial editing state to false
    return {
      displaying: true,
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

  show: function () {
    if (this.isMounted()) {
      this.setState({ displaying: !this.state.displaying });
    }
  },

  addInterest: function(e){
    e.preventDefault();

    var ideaId = this.props._id;

    app.InterestActions.add(ideaId);

    // Todo: Change state/class to indicate the interest

    return;
  },

  render: function() {
    var ideaContent;
    var editForm;
    // if editing render edit form otherwise render "Edit Idea" button
    if (this.state.editing) {
      editForm = <app.IdeaForm editing="true" name={this.props.name} key={this.props._id} _id={this.props._id} />
    }

    if (this.state.displaying) {
      ideaContent = (
        <div>
          <h3 ref="body">{this.props.name}</h3>
          <form className="pure-form" >
            {editForm}
            <button className="button-small pure-button pure-button-primary" onClick={this.edit}>{ this.state.editing ? 'Cancel' : 'Edit Idea'}</button>
            <button className="button-small pure-button pure-button-primary" onClick={this.delete}>Delete Idea</button>
            <button className="button-small pure-button pure-button-primary" onClick={this.addInterest}>Watch</button>
            <app.Comments idea_id={idea_id} />
          </form>
        </div>
      );
    }

    return (
      <div>
        {ideaContent}
      </div>
    );
  },

  edit: function(e) {
    e.preventDefault();
    if (this.isMounted()) {
      this.setState({ editing: !this.state.editing });
    }
  },

  delete: function(e) {
    e.preventDefault();
    if (this.isMounted()) {
      app.IdeaActions.delete({ id: this.props._id });
    }
  }
});
