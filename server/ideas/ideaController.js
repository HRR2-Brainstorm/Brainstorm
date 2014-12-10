var Idea = require('./idea.server.model.js');
var Q = require('q');

module.exports = {
  newIdea: function (req, res, next) {
    var idea = {};

    idea.name = req.body.name;
    idea.room = req.params.room_id;
    idea.owner = req.user._id;

    // create promise for Idea.create method
    var createIdea = Q.nbind(Idea.create, Idea);

    // attempt to create the idea
    createIdea(idea)
      .then(function (createdIdea) {
        // if the idea is created send that object back
        if (createdIdea) {
          res.json(createdIdea);
        }
      })
      .fail(function (error) {
        next(error);
      });
  },

  allIdeas: function(req, res, next) {
    // create promise for Idea.find
    var getIdeas = Q.nbind(Idea.find, Idea);
    var query = req.params.room_id ? { room: req.params.room_id } : {};
    // get all ideas
    getIdeas(query)
      .then(function(allIdeas) {
        // if there are ideas send them in response
        if(allIdeas) {
          res.json(allIdeas);
        }
      })
      .fail(function(error) {
        next(error);
      });
  },

  updateIdea: function(req, res, next) {
    // create promise for Idea.findById
    var findIdeaById = Q.nbind(Idea.findById, Idea);

    // attempt to find the idea by the id passed in
    findIdeaById(req.params.idea_id)
      .then(function(foundIdea) {
        // if the idea is found update the name and save
        if (foundIdea) {
          foundIdea.name = req.body.name;
          foundIdea.save(function(err) {
            if (err) {
              res.send(err);
            }
            res.json(foundIdea);
          });
        }
      })
      .fail(function(error) {
        next(error);
      });
  },

  deleteIdea: function(req, res, next) {
    // create promise for Idea.remove method
    var removeIdea = Q.nbind(Idea.remove, Idea);
    // delete idea based on id passed in
    removeIdea({_id: req.params.idea_id})
      .then(function(removedIdea) {
        // if the idea has been removed, send success
        // and id to remove from IdeaStore
        if(removedIdea[1].ok) {
          res.json({
            message: 'Successfully deleted.',
            _id: req.params.idea_id
          });
        }
      })
      .fail(function(error) {
        next(error);
      });
  }
};
