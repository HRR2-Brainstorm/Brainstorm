var express = require('express');
var mongoose = require('./db.js');
var app = express();

require('./config/middleware')(app, express);

module.exports = app;
