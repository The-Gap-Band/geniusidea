"use strict";

var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || '3000';

//========================================================//
//   connecting the client and server                     //
//   allows for CORS (cross origin resource sharing)      //
//========================================================//
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//========================================================//
//   Serving the client static files                      //
//========================================================//
app.use(express.static(path.normalize(__dirname + '/')));
// app.use(express.static(path.normalize(__dirname + '/profile')));
//========================================================//
//   Routes                                               //
//========================================================//

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  // res.send('HELLOOOOOO GAP BAND');
});

app.get('/profile', function(req, res) {
  // res.sendFile(path.join(__dirname + '/profile.html'));
});

//========================================================//
//   Database Routes                                      //
//========================================================//

app.post('/profile/habit', function(req, res){
//   pg.connect(connectionString, function(err, client, done){
//     var query = client.query('SELECT text, vote FROM topics');
//     var rows = []; // Array to hold values returned from database
//     if (err) {
//       return console.error('error running query', err);
//     }
//     query.on('row', function(row) {
//       rows.push(row);
//     });
//     query.on('end', function(result) {
//       client.end();
//       return res.json(rows);
//     });
//   });
});

//========================================================//
//   Calling the server                                   //
//========================================================//
var server = app.listen(port, function() {
  var host = server.address().address;
  console.log('The Gap Band app listening at http://%s:%s -- %s', host, port);
});

