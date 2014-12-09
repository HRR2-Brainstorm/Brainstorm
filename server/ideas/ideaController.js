var Idea = require('./idea.server.model.js');
var Q = require('q');

module.exports = {
  newIdea: function (req, res, next) {
    var idea = {};

    idea.name = req.body.body;
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
  }
};