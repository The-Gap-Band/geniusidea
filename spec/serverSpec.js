var request = require('request');
var mocha = require('mocha');
var chai = require('chai');
var assert = require('assert');
var expect = require('chai').expect;

var server = require('../app.js'); //.server;

describe('API', function() {
  describe('Request Methods', function() {

    it('should respond to GET requests for "/" with a 200 status', function(done) {
      request.get('http://localhost:3000', function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    // SERVER RESPONDS TO ADD A HABIT ON SUBMIT
    
    // USER CAN UPDATE THEIR HABIT 
    
    
  });

});