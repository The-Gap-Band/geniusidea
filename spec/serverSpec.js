var request = require('request');
var mocha = require('mocha');
var chai = require('chai');
var assert = require('assert');
var expect = require('chai').expect;

var server = require('../app.js'); //.server;

describe('SERVER', function() {
  describe('Request Methods', function() {

    it('should serve the home page ', function(done) {
      request('http://localhost:3000/', function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    // SERVER RESPONDS TO ADD A HABIT ON SUBMIT
    
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