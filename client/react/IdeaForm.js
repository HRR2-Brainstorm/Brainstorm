app.IdeaForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var name = this.refs.name.getDOMNode().value.trim();

    if (this.props.editing) {
      var idea = {id: this.props._id};
      idea.name = name;
      app.IdeaActions.edit(idea);
    } else {
      app.IdeaActions.create(name);
    }
    name.value = '';
    return;
  },

  render: function(){
    return (
      <form ref="form" onSubmit={this.handleSubmit}>
        <input type="text" ref="name" defaultValue={this.props.name} placeholder="Idea" />
        <input type="submit" ref="submit" value={this.props.editing ? "Edit Idea" : "Create Idea"} />
      </form>
    );
  }
});
