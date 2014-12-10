var Interest = require('./interest.server.model.js');
var Q = require('q');

module.exports = {
  add: function (req, res, next) {
    var interest = {};
    interest.idea = req.body.ideaId;
    interest.user = req.user._id;

    var addInterest = Q.nbind(Interest.create, Interest);

    addInterest(interest)
      .then(function (addedInterest) {
        if (addedInterest) {
          res.json(addedInterest);
        }
      })
      .fail(function (error) {
        next(error);
      });
  }
};