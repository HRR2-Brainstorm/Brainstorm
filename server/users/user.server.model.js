'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String
  },
  socialData: {
    type: Object
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date
  }
});

mongoose.model('User', UserSchema);