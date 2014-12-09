var ideaController = require('./ideaController.js');

module.exports = function (app) {
  // app === userRouter injected from middlware.js
  app.route('/')
  .post(ideaController.newIdea)
  .get(ideaController.allIdeas);
};