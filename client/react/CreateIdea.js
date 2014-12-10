app.CreateIdea = React.createClass({
  render: function(){
    return (
      <div>
        <app.IdeaForm room_id={this.props.room_id} />
      </div>
    );
  }
});
