app.Ideas = React.createClass({
  getInitialState: function() {
    return {
      ideas: app.IdeaStore.getAll()
    };
  },

  componentDidMount: function() {
    app.IdeaStore.addChangeListener(function() {
      if(this.isMounted()) {
        this.setState({ ideas: app.IdeaStore.getAll() });
      }
    }.bind(this));
    app.IdeaStore.all();
  },

  render: function() {
    var ideas = [];
    this.state.ideas.forEach(function(idea) {
      ideas.push(<app.Idea name={idea.name} key={idea._id} _id={idea._id} />);
    });
    return (
      <div ref="body">
        { ideas }
      </div>
    );
  }
})