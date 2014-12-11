var Comment = require('./comment.server.model.js');
var Idea = require('../ideas/idea.server.model.js');
var Q = require('q');

module.exports = {
  newComment: function (req, res, next) {
    var comment = {};

    //get comment parameters from request
    comment.name = req.body.name;
    comment.idea = req.params.idea_id;
    comment.owner = req.user._id;
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
    var getIdeas = Q.nbind(Idea.find, Idea);
    var query = req.params.room_id ? { room: req.params.room_id } : {};

    // get all ideas
    getIdeas(query)
      .then(function(allIdeas) {
        // if there are ideas send them in response
        if(allIdeas) {
          var getComments = Q.nbind(Comment.find, Comment);
          var query = [];
          allIdeas.forEach(function (idea) {
            query.push({ idea: idea._id});
          });
          getComments(query)
            .then(function (allComments) {
              if (allComments) {
                res.json(allComments);
              }
            })
            .fail(function (error) {
              next(error);
            });
        }
      })
      .fail(function(error) {
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
