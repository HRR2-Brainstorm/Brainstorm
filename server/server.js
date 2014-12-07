var express = require('express');
var mongoose = require('./db.js');
var app = express();

app.use(express.static('./client'));

module.exports = app;