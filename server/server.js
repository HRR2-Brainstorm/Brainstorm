var express = require('express');
var mongoose = require('./db/db.js');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello world');
});

module.exports = app;