var express = require('express');
var app = express();

app.use(express.static('./client'));

module.exports = app;