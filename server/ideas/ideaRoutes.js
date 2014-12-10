var ideaController = require('./ideaController.js');

module.exports = function (app) {
  // app === ideaRouter injected from middlware.js
  // the app has the '/ideas' path mounted for the ideaRouter
  // thus the root route here is actually '/ideas'
  app.route('/:room_id')
    .post(ideaController.newIdea)
    .get(ideaController.allIdeas);

  app.route('/:idea_id')
    .put(ideaController.updateIdea)
    .delete(ideaController.deleteIdea);
};
