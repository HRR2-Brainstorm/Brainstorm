var interestController = require('./interestController.js');

module.exports = function (app) {
  app.route('/')
  .post(interestController.add);
};