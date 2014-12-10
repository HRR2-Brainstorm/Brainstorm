var Interest = require('./interest.server.model.js');
var Idea = require('../ideas/idea.server.model.js');
var Q = require('q');

module.exports = {
  newInterest: function (req, res, next) {
    var interest = {};

    //get interest parameters from request
    interest.idea = req.params.idea_id;
    interest.owner = req.user._id;
    // interest.idea = req.body.ideaId;
    // interest.owner = req.body.userId;

    var createInterest = Q.nbind(Interest.create, Interest);

    createInterest(interest)
      .then(function (createdInterest) {
        if (createdInterest) {
          res.json(createdInterest);
        }
      })
      .fail(function (error) {
        next(error);
      });
  },

  allInterests: function (req, res, next) {
    var getIdeas = Q.nbind(Idea.find, Idea);
    var query = req.params.room_id ? { room: req.params.room_id } : {};

    // get all ideas
    getIdeas(query)
      .then(function(allIdeas) {
        // if there are ideas send them in response
        if(allIdeas) {
          var getInterests = Q.nbind(Interest.find, Interest);
          var query = [];
          allIdeas.forEach(function (idea) {
            query.push({ idea: idea._id });
          });
          getInterests(query)
            .then(function (allInterests) {
              if (allInterests) {
                res.json(allInterests);
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

  deleteInterest: function (req, res, next) {
    var deleteInterest = Q.nbind(Interest.findOneAndRemove, Interest);
    deleteInterest({
      _id: req.params.interest_id
    }).then(function (interest) {
      if (interest) {
        res.json({
          message: 'Successfully deleted',
          _id: req.params.interest_id
        });
      }
    })
    .fail(function (error) {
      next(error);
    });
  }
};
