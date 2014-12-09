'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoomSchema = new Schema({
  name: {
    type: String
  }
});

module.exports = mongoose.model('Room', RoomSchema);