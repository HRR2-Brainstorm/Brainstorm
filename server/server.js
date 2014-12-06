'use strict';

var express = require('express');
var mongoose = require('./db.js');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
  console.log('io says "Client connected..."');

  client.on('messages', function(data) {
    console.log(data);
    client.broadcast.emit('messages', data);
  });

  client.emit('messages', 'hello world');
});

require('./config/middleware')(app, express);

module.exports = server;
