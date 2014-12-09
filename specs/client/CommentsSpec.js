describe('Comments', function () {

  var TestUtils, Comments, CommentStoreHolder, mockComments;

  beforeEach(function () {
    mockComments = [{},{},{}];
    TestUtils = React.addons.TestUtils;

    CommentStoreHolder = {};
    CommentStoreHolder.all = app.CommentStore.all;
    CommentStoreHolder.create = app.CommentStore.create;
    app.CommentStore._comments = mockComments,

    app.CommentStore.all = function () {
      this.emitChange();
    };

    app.CommentStore.create = function (idea_id, name) {
      this._comments.push(name);
    };

    comments = React.createElement(app.Comments, null);
    comments = TestUtils.renderIntoDocument(comments);

  });

  afterEach(function () {
    app.CommentStore._comments = [];
    app.CommentStore.all = CommentStoreHolder.all;
    app.CommentStore.create = CommentStoreHolder.create;
  });

  it('should render the body', function () {
    expect(comments.refs.body).to.be.ok();
  });

  it('should get loaded comments', function () {
    expect(comments.state.comments).to.equal(mockComments);
  });

  it('should update its state when the CommentStore changes', function () {

    app.CommentActions.create(0, 'test');
    var stateComments = comments.state.comments;
    expect(stateComments[stateComments.length - 1]).to.equal('test');

  });

});
