var request = require('supertest');
var mocha = require('mocha');
var assert = require('assert');
var express = require('express');
var expect = require('chai').expect;
var server = require('../app.js'); //the server;
request = request('localhost:3000');

describe('API', function() {
  describe('handle http requests from client', function() {
    it('should respond to a GET request for a user profile with 200 status code', function (done){
      request
      .get('/')
      .expect(200, done);
    });

    it('should respond to a POST request to add a habit with a 200 status code', function (done){
      var object = {habit: 'call_mom'};
      request
      .post('/api/habits')
      .send(object)
      .expect(200, done);
    });

    it('should respond to a POST request to update a habit with a 200 status code', function (done){
      var object = {habit_id: 1, habit: 'coding'};
      request
      .post('/api/updateHabit')
      .send(object)
      .expect(200, done);
    });
    
  });

});