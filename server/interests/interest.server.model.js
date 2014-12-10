'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InterestSchema = new Schema({
  idea: {
    type: Schema.ObjectId,
    ref: 'Idea'
  },
  owner: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Interest', InterestSchema);
