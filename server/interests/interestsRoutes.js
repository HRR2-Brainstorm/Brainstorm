var interestsController = require('./interestsController.js');

module.exports = function (app) {
  app.route('/add')
  .post(interestsController.add);
};