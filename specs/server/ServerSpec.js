var expect = require('chai').expect;
var request = require('request');

var url = function(path) {
  return 'http://localhost:8000' + path;
};

describe('GET /', function() {
  it('responds', function(done){
    request(url('/'), function(error, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  })
});

describe('GET /index.html', function() {
  it('responds', function(done){
    request(url('/indexs.html'), function(error, res, body) {
      expect(res.headers['content-type'].indexOf('html')).to.not.equal(-1);
      done();
    });
  })
});

describe('GET /no-such-file.html', function() {
  it('responds', function(done){
    request(url('/no-such-file.html'), function(error, res, body) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  })
});
