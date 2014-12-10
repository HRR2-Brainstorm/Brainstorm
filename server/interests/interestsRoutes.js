var interestsController = require('./interestsController.js');

module.exports = function (app) {
  app.route('/')
  .post(interestsController.add);
};