var request = require('supertest');
var mocha = require('mocha');
var assert = require('assert');
var express = require('express');
var expect = require('chai').expect;
var server = require('../app.js'); //the server;

request = request('localhost:3000');

describe('API', function() {
  describe('handle http requests from client', function() {
    xit('should respond to a GET request for a user profile with 200 status code', function (done){
      request
      .get('/')
      .expect(200, done);
    });

    xit('should respond to a POST request to add a habit with a 200 status code', function (done){
      var object = {habit: 'call_mom'};
      request
      .post('/api/habits')
      .send(object)
      .expect(200, done);
    });

    xit('should respond to a POST request to update a habit with a 200 status code', function (done){
      var object = {habit_id: 1, habit: 'coding'};
      request
      .post('/api/updateHabit')
      .send(object)
      .expect(200, done);
    });
    
  });

  describe('Account Creation', function(){
    xit('should create a new user record on signup', function (done) {
      var options = {
        'username': 'maria',
        'password': '123'
      };

      request
        .post('/api/signup')
        .send(options)
        .expect(200, done);
    });

    it('Signup logs in a new user ', function (done){

      var options = {
        'username': 'rachel',
        'password': '123'
      };

      request
        .post('/api/signup')
        .send(options)
        .expect(302)
        .end(function(err, res){
          expect(res.header.location).to.equal('/profile');
          done();
        });
    });
  });
  describe('Account Login: ', function (){
     var options = {
        'username': 'rachel',
        'password': '123'
      };

    it('should login existing users', function (done){
      request
        .post('/api/login')
        .send(options)
        .end(function(err, res){
          expect(res.header.location).to.equal('/profile');
          done();
        });
    });
  }); 

    
});