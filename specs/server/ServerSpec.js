/* global require, describe, it */
'use strict';

var expect = require('chai').expect;
var request = require('request');

var url = function(path) {
  return 'http://localhost:8000' + path;
};

describe("MongoDB", function() {
  it("is there a server running", function(next) {
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect('mongodb://127.0.0.1:27017/brainstormer', function(err, db) {
      expect(err).to.equal(null);
      next();
    });
  });
});

describe('GET /', function() {
  it('responds', function(done){
    request(url('/'), function(error, res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});

describe('GET /index.html', function() {
  it('responds', function(done){
    request(url('/index.html'), function(error, res) {
      expect(res.headers['content-type'].indexOf('html')).to.not.equal(-1);
      done();
    });
  });
});

describe('GET /no-such-file.html', function() {
  it('responds', function(done){
    request(url('/no-such-file.html'), function(error, res) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
