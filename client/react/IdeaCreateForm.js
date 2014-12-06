app.IdeaCreateForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    var ideaBody = this.refs.body.getDOMNode();

    app.IdeaActions.create(ideaBody.value.trim());
    ideaBody.value = '';
    return;
  },

  render: function(){
    return (
      <form ref="form" onSubmit={this.handleSubmit}>
        <input type="text" ref="body" placeholder="Idea" />
        <input type="submit" ref="submit" value="Create Idea" />
      </form>
    );
  }
});
