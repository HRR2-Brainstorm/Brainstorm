'use strict';

var express = require('express');
var mongoose = require('./db.js');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
  client.on('comment-change', function(currentComments) {
    client.broadcast.emit('comment-change', currentComments);
  });

  client.on('idea-change', function(currentIdeas) {
    client.broadcast.emit('idea-change', currentIdeas);
  });

  client.on('interest-change', function(currentInterests) {
    client.broadcast.emit('interest-change', currentInterests);
  });

  client.on('room-change', function(currentRooms) {
    client.broadcast.emit('room-change', currentRooms);
  });
});

require('./config/middleware')(app, express);

module.exports = server;
