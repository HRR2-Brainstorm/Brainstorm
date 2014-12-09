var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function(app, express) {
  var commentRouter = express.Router();
  var ideaRouter = express.Router();
  var roomRouter = express.Router();
  var userRouter = express.Router();
  var interestRouter = express.Router();

  app.use(morgan('dev'));
  // Returns middleware that only parses urlencoded bodies
  // and parses extended syntax with qs module
  app.use(bodyParser.urlencoded({extended: true}));
  // bodyParser.json() returns middleware that only parses json
  app.use(bodyParser.json());
  // use express to serve statis assets
  app.use(express.static(__dirname + '/../../client'));

  //auth controller must be first to attach user to request
  require('../users/userAuthController.js')(app);
  app.use('/comments', commentRouter);
  app.use('/ideas', ideaRouter);
  app.use('/rooms', roomRouter);
  app.use('/users', userRouter);
  app.use('/interest', interestRouter);

  require('../comments/commentRoutes.js')(commentRouter);
  require('../ideas/ideaRoutes.js')(ideaRouter);
  require('../rooms/roomRoutes.js')(roomRouter);
  require('../users/userRoutes.js')(userRouter);
  require('../interests/interestRoutes.js')(interestRouter);
};
