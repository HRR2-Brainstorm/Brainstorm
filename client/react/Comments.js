app.Comments = React.createClass({
  //get all loaded comments
  getInitialState: function () {
    return {
      displaying: false,
      comments: app.CommentStore.getAll(this.props.idea_id)
    };
  },

  //when we mount the view setup event listener for store changes
  componentDidMount: function () {
    app.CommentStore.addChangeListener(function () {
      if (this.isMounted()) {
        this.setState({ comments: app.CommentStore.getAll(this.props.idea_id) });
      }
    }.bind(this));
  },

  show: function (e) {
    e.preventDefault();

    if (this.isMounted()) {
      this.setState({ displaying: !this.state.displaying });
    }
  },

  //render a comment component for each comment
  render: function () {
    var comments;
    var commentForm;
    var showCommentsButton;
    //display comments if we are displaying, otherwise show buttons
    if (this.state.displaying){
      commentForm = <app.CommentForm idea_id={this.props.idea_id} />
      comments = [];
      //render a comment component for each comment
      this.state.comments.forEach(function (comment) {
        comments.push(
          <app.Comment name={comment.name} key={comment._id} _id={comment._id} idea_id={comment.idea_id} />
        );
      });
    }

    showCommentsButton = <button className="pure-button" onClick={this.show}>{this.state.displaying? 'Hide' : 'Show'} Comments</button>

    return (
      <div ref="body">
        { showCommentsButton }
        { comments }
        { commentForm }
      </div>
    );
  }
});
