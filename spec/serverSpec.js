var request = require('request');
var mocha = require('mocha');
var chai = require('chai');
var assert = require('assert');
var expect = require('chai').expect;

var server = require('../app.js'); //.server;

describe('SERVER', function() {
  describe('User Functions', function() {
    // GET THE USER PROFILE
      // if user profile exists, 
        // return 200
      // else 
        // return 404

    it('should respond ', function(done) {
      request('http://localhost:3000/', function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    // USER CAN ADD A HABIT ON SUBMIT
    xit('should respond to GET requests for "/profile" with a 200 status code', function(done) {
      request('http://localhost:3000', function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    // USER CAN UPDATE THEIR HABIT 
    xit('should send back parsable stringified JSON', function(done) {
      request('', function(error, response, body) {
        var req = 
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    
  });

});