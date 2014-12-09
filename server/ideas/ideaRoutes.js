var ideaController = require('./ideaController.js');

module.exports = function (app) {
  // app === ideaRouter injected from middlware.js
  app.route('/')
    .post(ideaController.newIdea)
    .get(ideaController.allIdeas);

  app.route('/:idea_id')
    .put(ideaController.updateIdea)
    .delete(ideaController.deleteIdea);
};