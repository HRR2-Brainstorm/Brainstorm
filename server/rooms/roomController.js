var Room = require('./room.server.model.js');
var Q = require('q');

module.exports = {
  newRoom: function (req, res, next) {
    var room = {};

    room.name = req.body.body;

    var createRoom = Q.nbind(Room.create, Room);

    createRoom(room)
      .then(function (createdRoom) {
        if (createdRoom) {
          res.json(createdRoom);
        }
      })
      .fail(function (error) {
        next(error);
      });
  },

  allRooms: function(req, res, next) {
    var getRooms = Q.nbind(Room.find, Room);
    getRooms({})
    .then(function(allRooms) {
      if(allRooms) {
        res.json(allRooms);
      }
    })
    .fail(function(error) {
      next(error);
    });
  }
};