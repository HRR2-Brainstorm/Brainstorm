var User = require('./user.server.model.js');
var Q = require('q');

module.exports = {
  user: function (req, res, next) {
    var user = req.user || null;
    res.json(user);
  },
  
  logout: function (req, res, next) {
    req.logout();
    res.json(null);
  }
};