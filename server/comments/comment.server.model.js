'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  name: {
    type: String
  },
  idea: {
    type: Schema.ObjectId,
    ref: 'Idea'
  },
  owner: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Comment', CommentSchema);
