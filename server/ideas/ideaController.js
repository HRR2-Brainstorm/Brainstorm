var Idea = require('./idea.server.model.js');
var Q = require('q');

module.exports = {
  newIdea: function (req, res, next) {
    var idea = {};

    idea.name = req.body.name;
    // temporary values until this works
    idea.room = '5486357eeadcc15b28af33a6';
    idea.owner = '5486357eeadcc15b28af33a5';

    var createIdea = Q.nbind(Idea.create, Idea);

    createIdea(idea)
      .then(function (createdIdea) {
        if (createdIdea) {
          res.json(createdIdea);
        }
      })
      .fail(function (error) {
        next(error);
      });
  },

  allIdeas: function(req, res, next) {
    var getIdeas = Q.nbind(Idea.find, Idea);

    getIdeas({})
      .then(function(allIdeas) {
        if(allIdeas) {
          res.json(allIdeas);
        }
      })
      .fail(function(error) {
        next(error);
      });
  },

  updateIdea: function(req, res, next) {
    var findIdeaById = Q.nbind(Idea.findById, Idea);

    findIdeaById(req.params.idea_id)
      .then(function(foundIdea) {
        if (foundIdea) {
          foundIdea.name = req.body.name;
          foundIdea.save(function(err) {
            if (err) {
              res.send(err);
            }
            res.json(foundIdea);
          });
        }
      });
  },

  deleteIdea: function(req, res, next) {
    var removeIdea = Q.nbind(Idea.remove, Idea);
    removeIdea({_id: req.params.idea_id})
      .then(function(removedIdea) {
        if(removedIdea[1].ok) {
          res.json({
            message: 'Successfully deleted.',
            id: req.params.idea_id
          });
        }
      });
  }
};