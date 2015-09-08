var pg = require('pg');
var chai = require('chai');
var request = require("request"); // You might need to npm install the request module!
var config = require('../server/config');
var databaseURL = config.databaseURL;
var assert = chai.assert;
var expect = chai.expect;


/*
ITEMS TO TEST FOR IN DATABASE
-Connection established to Postgres server
-Habits are inserted into correct place
-Habits are given to client when request

The code below is an example from Shortly-Express. You can use this as a template to establish a connection to the db when testing.... or you can toss this out.
*/
describe('testing a true fact', function() {
  it('expect say that 1 + 1 = 2', function() {
    expect(1 + 1).to.equal(2);
  });

});

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

describe("Existence of Necessary tables", function() {
  describe("The correct tables", function() {

    it('expect say that 2 + 1 = 3', function() {
      expect(2 + 1).to.equal(3);
    });

    it("should have tables called 'users', 'habits', and 'updates", function(done) {
      request('http://localhost:3000/api/dbtest', function(error, response, body){
        // expect(response.body).to.equal([4,5]);
        expect(response.body).to.include('users');
        expect(response.body).to.include('habits');
        expect(response.body).to.include('updates');
        done();
      });
    });

    it('should respond ', function(done) {
      request('http://localhost:3000/', function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

  });
});