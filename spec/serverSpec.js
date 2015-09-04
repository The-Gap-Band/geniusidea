var request = require('supertest');
var mocha = require('mocha');
var assert = require('assert');
var express = require('express');
var expect = require('chai').expect;
var server = require('../app.js'); //the server;
request = request('localhost:3000');

describe('API', function() {
  describe('handle http requests', function() {
    it('should respond to a GET request for a user profile with 200 status code', function(done){
      request.get('/').expect(200, done);
    });
    // it('should respond to a GET request for a user profile with 200 status code', function(done) {
    //   request('http://localhost:3000/', function(error, response, body) {
    //     expect(response.statusCode).to.equal(200);
    //     done();
    //   });
    // });

    // USER CAN ADD A HABIT ON SUBMIT
    // it('should route a habit to the database', function(done) {
    //   request('http://localhost:3000/api/addHabit', function(error, response, body) {
    //     expect(response.statusCode).to.equal(200);
    //     done();
    //   });
    // });

    // // USER CAN UPDATE THEIR HABIT 
    // xit('should send back parsable stringified JSON', function(done) {
    //   request('', function(error, response, body) {
    //     var req = 
    //     expect(response.statusCode).to.equal(200);
    //     done();
    //   });
    // });

    
  });

});