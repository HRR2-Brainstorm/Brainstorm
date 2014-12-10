var Comment = require('./comment.server.model.js');
var Q = require('q');

module.exports = {
  newComment: function (req, res, next) {
    var comment = {};

    //get comment parameters from request
    comment.name = req.body.name;
    comment.owner = '5486357eeadcc15b28af33a5';
    comment.idea = '5487b6bcd45728763106ce12';
    // comment.idea = req.body.ideaId;
    // comment.owner = req.body.userId;

    var createComment = Q.nbind(Comment.create, Comment);

    createComment(comment)
      .then(function (createdComment) {
        if (createdComment) {
          res.json(createdComment);
        }
      })
      .fail(function (error) {
        next(error);
      });
  },

  allComments: function (req, res, next) {
    var getComments = Q.nbind(Comment.find, Comment);
    getComments({})
    .then(function (allComments) {
      if (allComments) {
        res.json(allComments);
      }
    })
    .fail(function (error) {
      next(error);
    });
  },

  editComment: function (req, res, next) {
    var editComment = Q.nbind(Comment.findOneAndUpdate, Comment);
    editComment({
      _id: req.params.comment_id
    },{
      name: req.body.name
    }).then(function (comment) {
        if (comment) {
          res.json(comment);
        }
      })
      .fail(function (error) {
        next(error);
      });
  },

  deleteComment: function (req, res, next) {
    var deleteComment = Q.nbind(Comment.findOneAndRemove, Comment);
    deleteComment({
      _id: req.params.comment_id
    }).then(function (comment) {
      if (comment) {
        res.json({
          message: 'Successfully deleted',
          _id: req.params.comment_id
        });
      }
    })
    .fail(function (error) {
      next(error);
    });
  }
};
