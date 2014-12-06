'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoomSchema = new Schema({
  name: {
    type: String
  }
});

mongoose.model('Room', RoomSchema);