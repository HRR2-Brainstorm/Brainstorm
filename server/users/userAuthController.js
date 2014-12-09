'use strict';

var User = require('../db.js').User;
var passport = require('passport');
var session = require('express-session');

module.exports = function(app) {
  app.use(session({
    secret: 'hackReactorStudentsAreAwesome',
    resave: false,
    saveUninitialized: true
  }));

  app.use(passport.initialize());
  app.use(passport.session());


  passport.serializeUser(function(user, done) {
    done(null, user.username);
  });

  passport.deserializeUser(function(username, done) {
    User.findOne({username: username}, function(err, user) {
      if (user) {
        done(null, user);
      } else {
        done(err, false);
      }
    });
  });


  app.get('/auth', passport.authenticate('github'));
  app.get('/auth/callback',
    passport.authenticate('github', { successRedirect: '/', failureRedirect: '/' }));


  var GitHubStrategy = require('passport-github').Strategy;
  passport.use(new GitHubStrategy({
      clientID: '4e0e24f94e07e2e2d1c9',
      clientSecret: 'c5a5d8a6c39396e0292e21267e4b8fc7aebf3bfe',
      callbackURL: 'http://localhost:3000/auth/callback'
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({username: profile.username}, function(err, user) {
        if(err) {
          console.log(err);
        }

        if (!user) {
          user = new User({ username: profile.username, socialData: profile._json });
          user.save();
        }
        done(null, user);
      });
    }
  ));
};
