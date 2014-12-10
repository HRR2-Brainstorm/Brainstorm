app.Idea = React.createClass({

  addInterest: function(e){
    e.preventDefault();

    var ideaId = this.props._id;

    app.InterestActions.add(ideaId);

    // Todo: Change state/class to indicate the interest

    return;
  },

  render: function() {
    return (
      <h3>{this.props.name} <a href="#" onClick={this.addInterest}>#</a></h3>
    );
  }
});