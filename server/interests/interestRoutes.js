var interestController = require('./interestController.js');

module.exports = function (app) {
  app.route('/:idea_id')
    .post(interestController.newInterest)
    .get(interestController.allInterests);

  app.route('/:interest_id')
    .delete(interestController.deleteInterest);
};
