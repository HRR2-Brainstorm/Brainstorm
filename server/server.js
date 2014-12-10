'use strict';

var express = require('express');
var mongoose = require('./db.js');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
  client.on('join', function(room) {
    client.join(room);
  });

  client.on('comment-change', function(currentComments, room) {
    client.broadcast.in(room).emit('comment-change', currentComments);
  });

  client.on('idea-change', function(currentIdeas, room) {
    client.broadcast.in(room).emit('idea-change', currentIdeas);
  });

  client.on('interest-change', function(currentInterests, room) {
    client.broadcast.in(room).emit('interest-change', currentInterests);
  });

  client.on('room-change', function(currentRooms) {
    client.broadcast.emit('room-change', currentRooms);
  });
});

require('./config/middleware')(app, express);

module.exports = server;
