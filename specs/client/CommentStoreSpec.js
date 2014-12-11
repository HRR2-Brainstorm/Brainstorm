describe('CommentStore', function(){

  var mockResult, mockIdea_id, mockComment;
  var ajaxHolder = $.ajax;

  beforeEach(function () {
    mockComment = undefined;
    mockResult = undefined;
    $.ajax = function (props) {
      mockResult = props;
      return {
        done: function (cb) {
          cb([]);
          return { fail: function () {} };
        }
      };
    };
  });

  afterEach(function () {
    $.ajax = ajaxHolder;
  });

  it('should perform an ajax request to get comments', function () {
    app.CommentActions.get();
    expect(mockResult.type).to.equal('GET');
    expect(mockResult.url).to.equal('/comments');
  });

  xit('should perform an ajax request to post a comment', function () {
    mockIdea_id = 0;
    mockComment = 'testcomment';
    app.CommentActions.create(mockIdea_id, mockComment);
    expect(mockResult.type).to.equal('POST');
    expect(mockResult.url).to.equal('/comments');
    expect(mockResult.data.name).to.equal(mockComment);
  });

  xit('should perform an ajax request to edit a comment', function () {
    mockComment = 'updatedcomment';
    var _id = 0;
    app.CommentActions.edit(_id, mockComment);
    expect(mockResult.type).to.equal('PUT');
    expect(mockResult.url).to.equal('/comments/0');
    expect(mockResult.data.name).to.equal(mockComment);
  });

  xit('should perform an ajax request to delete a comment', function () {
    var _id = 0;
    app.CommentActions.delete(_id);
    expect(mockResult.type).to.equal('DELETE');
    expect(mockResult.url).to.equal('/comments/0');
  });

  xit('should emit events after comment AJAX requests complete', function(){
    var callcount = 0;
    var callback = function(){callcount++;};

    app.CommentStore.addChangeListener(callback);

    app.CommentActions.get();

    expect(callcount).to.equal(1);

    app.CommentActions.create(0, 'test');

    expect(callcount).to.equal(2);

    app.CommentStore.removeChangeListener(callback);

  });

});
