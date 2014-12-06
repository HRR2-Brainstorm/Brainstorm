var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello world');
});

module.exports = app;