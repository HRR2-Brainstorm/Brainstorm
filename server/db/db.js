var mongoose    = require('mongoose');

mongoose.connect('mongodb://localhost/brainstormer');
var userModel = require('./users/user.server.model.js');
var ideaModel = require('./ideas/idea.server.model.js');
var roomModel = require('./rooms/room.server.model.js');
var mongoose.User = mongoose.model('User');
var mongoose.Idea = mongoose.model('Idea');
var mongoose.Room = mongoose.model('Room');

module.exports = mongoose;