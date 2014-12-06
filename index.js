var app = require('./server/server.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/brainstormer');
var userModel = require('./models/user.server.model.js');
var ideaModel = require('./models/idea.server.model.js');
var roomModel = require('./models/room.server.model.js');
var User = mongoose.model('User');
var Idea = mongoose.model('Idea');
var Room = mongoose.model('Room');

<<<<<<< HEAD
var port = 8000;
app.listen(port, function() {
  console.log('Server is listening on ' + port);
});
=======
app.listen(8000);
>>>>>>> Add mongoose
