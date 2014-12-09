var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function(app, express) {
  var ideaRouter = express.Router();
  var roomRouter = express.Router();
  var userRouter = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));

  //auth controller must be first to attach user to request
  require('../users/userAuthController.js')(app);
  app.use('/ideas', ideaRouter);
  app.use('/rooms', roomRouter);
  app.use('/users', userRouter);

  require('../ideas/ideaRoutes.js')(ideaRouter);
  require('../rooms/roomRoutes.js')(roomRouter);
  require('../users/userRoutes.js')(userRouter);
};