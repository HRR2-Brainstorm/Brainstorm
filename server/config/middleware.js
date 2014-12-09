var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function(app, express) {
  var ideaRouter = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));

  app.use('/ideas', ideaRouter);

  require('../ideas/ideaRoutes.js')(ideaRouter);
};