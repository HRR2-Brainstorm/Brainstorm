app.Idea = React.createClass({
  render: function() {
    return (
      <h3 ref="body">{this.props.name}</h3>
    );
  }
});