"use strict";

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || '3000';
// var route = require('./server/router.js')(app);
// var session = require('express-session'); //requiring session
var db = require('./server/db.js')(app);

//========================================================//
//   connecting the client and server                     //
//   allows for CORS (cross origin resource sharing)      //
//========================================================//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//========================================================//
//   Serving the client static files                      //
//========================================================//
app.use(express.static(path.normalize(__dirname + '/client')));

// app.use(session({ //
//   secret: 'shhh, it\'s a secret',
//   resave: false,
//   saveUninitialized: true
// }));


//========================================================//
//   Calling the server                                   //
//========================================================//
var server = app.listen(port, function() {
  var host = server.address().address;
  console.log('The Gap Band app listening at http://%s:%s -- %s', host, port);
});

