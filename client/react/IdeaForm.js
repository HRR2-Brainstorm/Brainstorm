app.IdeaForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    // get the value out of the input with ref="name"
    var name = this.refs.name.getDOMNode();

    // if editing send info to edit method in IdeaActions
    if (this.props.editing) {
      var idea = {id: this.props._id};
      idea.name = name.value.trim();
      app.IdeaActions.edit(idea);
    } else { // else an idea is being created
      app.IdeaActions.create(name.value.trim());
    }
    // clear the value in the input
    name.value = '';
    return;
  },

  render: function(){
    // if editing the defaultValue will be the idea name
    // if editing an "Edit" button will show otherwise a "Create"
    return (
      <form className="pure-form" ref="form" onSubmit={this.handleSubmit}>
        <input type="text" ref="name" defaultValue={this.props.name} placeholder="Idea" />
        <button className="button-small pure-button pure-button-primary" type="submit" ref="submit" >{this.props.editing ? "Edit Idea" : "Create Idea"}s</button>
      </form>
    );
  }
});
