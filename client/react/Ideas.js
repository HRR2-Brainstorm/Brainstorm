app.Ideas = React.createClass({
  getInitialState: function() {
    return {
      ideas: app.IdeaStore.getAll()
    };
  },

  componentDidMount: function() {
    // add a change listener to retrieve all ideas in IdeaStore
    app.IdeaStore.addChangeListener(function() {
      if(this.isMounted()) {
        this.setState({ ideas: app.IdeaStore.getAll() });
      }
    }.bind(this));
    // get all ideas from db
    app.IdeaStore.all();
  },

  render: function() {
    var ideas = [];
    // create all idea components
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