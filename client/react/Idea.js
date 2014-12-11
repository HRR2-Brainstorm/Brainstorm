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

  render: function() {
    var ideaContent;
    var editForm;
    // if editing render edit form otherwise render "Edit Idea" button
    if (this.state.editing) {
      editForm = <app.IdeaForm editing="true" name={this.props.name} key={this.props._id} _id={this.props._id} />
    }

    if (this.state.displaying) {
      ideaContent = (
        <div className="idea">

          <form className="pure-form pure-g">
            <div className="pure-u-1-1 pure-u-sm-5-6">
              <h3 ref="body">{this.props.name}</h3>
              {editForm}
            </div>

            <div className="auth-check pure-u-1-1 pure-u-sm-1-6 watch">
              <app.Interest idea_id={this.props._id} />
            </div>
            <div className="pure-u-1-1 pure-u-sm-1-6 watch auth-check">
              <button className="button-small pure-button pure-button-primary" onClick={this.edit}>{ this.state.editing ? 'Cancel' : 'Edit Idea'}</button>
              <button className="button-small pure-button pure-button-primary" onClick={this.delete}>Delete Idea</button>
            </div>

            <app.Comments idea_id={this.props._id} />
          </form>

        </div>
      );
    }

    return (
      <div>
        {ideaContent}
        <button className="pure-button" onClick={this.show}>{ this.state.displaying ? 'Hide' : 'Show' } Idea</button>
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
