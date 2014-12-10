var mongoose = require('mongoose');
var db = {};

mongoose.connect('mongodb://localhost/brainstormer');
var userModel = require('./users/user.server.model.js');
var ideaModel = require('./ideas/idea.server.model.js');
var roomModel = require('./rooms/room.server.model.js');
var interestsModel = require('./interests/interests.server.model.js');
db.User = mongoose.model('User');
db.Idea = mongoose.model('Idea');
db.Room = mongoose.model('Room');
db.Interests = mongoose.model('Interests');

module.exports = db;