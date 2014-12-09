var commentController = require('./commentController.js');

module.exports = function (app) {
  // app === userRouter injected from middlware.js
  app.route('/')
    .post(commentController.newComment)
    .get(commentController.allComments);

  app.route('/:comment_id')
    .put(commentController.editComment)
    .delete(commentController.deleteComment);
};
