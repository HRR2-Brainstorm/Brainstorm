app.Comment = React.createClass({
  getInitialState: function() {
    // set initial editing state to false
    return {
      editing: false
    };
  },

  componentWillReceiveProps: function() {
    // remove the editing parameter when the view updates
    this.setState({editing: false});
  },

  render: function() {
    var editForm;
    // if editing render edit form otherwise render "Edit Idea" button
    if (this.state.editing) {
      editForm = <app.CommentForm editing={this.state.editing} name={this.props.name} key={this.props._id} _id={this.props._id} />
    }

    return (
      <div>
        <h3 ref="body">{this.props.name}</h3>
        <form className="pure-form formEditComment" >
          {editForm}
          <button className="pure-button" onClick={this.edit}>{ this.state.editing ? 'Cancel' : 'Edit Comment'}</button>
          <button className="pure-button" onClick={this.delete}>Delete Comment</button>
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
      app.CommentActions.delete(this.props._id);
    }
  }
});
