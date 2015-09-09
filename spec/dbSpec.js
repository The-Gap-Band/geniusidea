var pg = require('pg');
var chai = require('chai');
var request = require("request");
var config = require('../server/config');
var databaseURL = config.databaseURL;
var assert = chai.assert;
var expect = chai.expect;

describe("Existence of Necessary tables", function() {
  describe("The correct tables", function() {

    it("should have tables called 'users', 'habits', and 'updates", function(done) {
      request('http://localhost:3000/api/dbtestTablesExist', function(error, response, body){
        expect(response.body).to.include('users');
        expect(response.body).to.include('habits');
        expect(response.body).to.include('updates');
        done();
      });
    });

  });

});