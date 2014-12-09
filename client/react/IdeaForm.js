app.IdeaForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var ideaBody = this.refs.body.getDOMNode();

    if (this.props.editing) {
      // needs to be implemented!!!!!!!
    } else {
      app.IdeaActions.create(ideaBody.value.trim());
    }
    ideaBody.value = '';
    return;
  },

  render: function(){
    return (
      <form ref="form" onSubmit={this.handleSubmit}>
        <input type="text" ref="body" defaultValue={this.props.name} placeholder="Idea" />
        <input type="submit" ref="submit" value="Create Idea" />
      </form>
    );
  }
});
