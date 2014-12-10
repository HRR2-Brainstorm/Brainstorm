describe('Comment Form', function () {

  var TestUtils, commentForm, commentMockAction, commentActionHolder;

  beforeEach(function () {
    TestUtils = React.addons.TestUtils;
    commentForm = React.createElement(app.CommentForm, null);
    commentActionHolder = app.CommentActions;
    app.CommentActions = {
      create:function (idea_id, text) {
        commentMockAction = text;
      }
    };
    commentForm = TestUtils.renderIntoDocument(commentForm);
  });

  afterEach(function () {
    app.CommentActions = commentActionHolder;
  });

  it('should render the body', function () {
    expect(commentForm.refs.body).to.be.ok();
  });

  it('should handle a click', function () {
    commentForm.refs.input.getDOMNode().value = 'test';
    TestUtils.Simulate.submit(commentForm.refs.body.getDOMNode());
    expect(commentMockAction).to.equal('test');
  });

});
