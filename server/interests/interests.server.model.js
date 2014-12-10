'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InterestsSchema = new Schema({
  idea: {
    type: Schema.ObjectId,
    ref: 'Idea'
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Interests', InterestsSchema);