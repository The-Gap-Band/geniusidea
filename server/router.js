var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./db.js');

module.exports = function(app){
  app.post('/api/signup', function (req, res){
    // db.newUser(req, res);
    // function (err, data){
    //   if(!err){
    //     res.redirect('/profile.html');
    //   } else {
    //     res.redirect('/signup');
    //   }
    // };
  });
  
  app.post('/api/login', function (req, res){
    // function (err, data){
    //   if(!err){
    //     res.redirect('/profile.html');
    //   } else {
    //     res.redirect('/signup');
    //   }
    // }
  });

  app.post('/api/habits', function (req, res){
    db.addHabit(req, res);
  });

  app.get('/api/getHabits', function (req, res){
    db.getHabits(req, res);
  });

  app.post('/api/updateHabit', function (req, res){
    db.updateHabit(req, res);
  });

  app.get('/api/updateHabit', function (req, res){
    db.updateHabit(req, res);
  });

  app.delete('/api/deleteHabit', function (req, res) {
    db.deleteHabit(req, res);
  });
};
