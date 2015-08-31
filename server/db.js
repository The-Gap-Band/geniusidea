var express = require('express');
var app = express();
var pg = require('pg');
module.exports = function(app){
//========================================================//
//   Database Routes                                      //
//========================================================//
var connectionString = 'postgres://localhost:5432/postgres';

app.get('/api/profile', function(req, res){
   pg.connect(connectionString, function(err, client, done){
    var query = client.query('SELECT * from users');
    var rows = []; // Array to hold values returned from database
    if (err) {
      return console.error('error running query', err);
    }
    query.on('row', function(row) {
      rows.push(row);
    });
    query.on('end', function(result) {
      client.end();
      // return res.json(rows);
      return 'cats';
    });
  });
});

app.post('/api/addHabit', function(req, res){
  pg.connect(connectionString, function(err, client, done){
    var query = client.query('INSERT INTO habits (user_id, habit) VALUES (1, ‘biking every day’);');
    // var rows = []; // Array to hold values returned from database
    if (err) {
      return console.error('error running query', err);
    }
    // query.on('row', function(row) {
    //   rows.push(row);
    // });
    // query.on('end', function(result) {
    //   client.end();
    //   return res.json(rows);
    // });
  });
});


// app.post('/api/updateHabit', function(req, res){
//   pg.connect(connectionString, function(err, client, done){


// });
}
// module.exports = db;