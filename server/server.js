var express = require('express');
var app = express();

require('./config/middleware')(app, express);

module.exports = app;
