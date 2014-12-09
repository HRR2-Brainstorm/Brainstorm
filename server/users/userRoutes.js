var userController = require('./userController.js');

module.exports = function(app) {
  // app === userRouter injected from middlware.js
  app.route('/')
  .delete(userController.logout)
  .get(userController.user);
};