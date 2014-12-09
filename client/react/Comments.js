app.Comments = React.createClass({
  //get all loaded comments
  getInitialState: function () {
    return {
      comments: app.CommentStore.getAll()
    };
  },

  //when we mount the view setup event listener for store changes
  componentDidMount: function () {
    app.CommentStore.addChangeListener(function () {
      if (this.isMounted()) {
        this.setState({ comments: app.CommentStore.getAll() });
      }
    }.bind(this));
  },

  //render a comment component for each comment
  render: function () {
    var comments = [];
    this.state.comments.forEach(function (comment) {
      comments.push(
        <app.Comment name={comment.name} key={comment._id} _id={comment._id} />
      );
    });
    return (
      <div ref="body">
        { comments }
      </div>
    );
  }
});
