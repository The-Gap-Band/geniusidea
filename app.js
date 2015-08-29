"use strict";

var express = require('express');
var app = express();
var path = require('path');
var requestHandler = require('./server/requestHandler.js')(app);
var parser = require('body-parser');
var port = process.env.PORT || '3000';
var pg = require('pg');
//========================================================//
//   connecting the client and server                     //
//   allows for CORS (cross origin resource sharing)      //
//========================================================//
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(parser.json());
app.use(parser.urlencoded({extended:false}));
//========================================================//
//   Serving the client static files                      //
//========================================================//

app.use(express.static(path.normalize(__dirname + '/')));

 //========================================================//
//   Routes                                               //
//========================================================//
app.get('/profile', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

//========================================================//
//   Database Routes                                      //
//========================================================//
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/postgres';
app.post('/profile/', function(req, res){
  pg.connect(connectionString, function(err, client, done){
    // var query = client.query('SELECT text, vote FROM topics');
    // var rows = []; // Array to hold values returned from database
    // if (err) {
    //   return console.error('error running query', err);
    // }
    // query.on('row', function(row) {
    //   rows.push(row);
    // });
    // query.on('end', function(result) {
    //   client.end();
    //   return res.json(rows);
    // });
  });
});

//========================================================//
//   Calling the server                                   //
//========================================================//
var server = app.listen(port, function() {
  var host = server.address().address;
  console.log('The Gap Band app listening at http://%s:%s -- %s', host, port);
});

