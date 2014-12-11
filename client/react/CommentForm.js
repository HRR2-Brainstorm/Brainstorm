app.CommentForm = React.createClass({

  handleSubmit: function (e) {
    e.preventDefault();

    var commentBody = this.refs.input.getDOMNode();
    var comment = commentBody.value.trim();

    //if editing dispatch to editing
    if (this.props.editing) {
      app.CommentActions.edit(this.props._id, comment);
    } else { //otherwise dispatch to create
      app.CommentActions.create(this.props.idea_id, comment);
    }

    //dispatch an event with the comment text
    commentBody.value = '';
    return;
  },

  render: function () {
    return (
      <form className="pure-form auth-check formComment" ref="body" onSubmit={this.handleSubmit}>
        <input className="pure-u-1-1 pure-u-sm-5-6 postfix" type="text" ref="input" placeholder="Add your comment..." />
        <button className="pure-u-1-1 pure-u-sm-1-6 button-small pure-button pure-button-primary no-margin" type="submit" ref="submit">{this.props.editing ? 'Edit' : 'Create'}</button>
      </form>
    );
  }

});
