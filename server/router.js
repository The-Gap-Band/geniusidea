var express = require('express');
var app = express();
var db = require('./db.js');
module.exports = function(app){
  app.post('/api/signup', function (req, res){
    newUser(req, res);
    if(!err){
      res.redirect(302, '/profile.html');
    } else {
      res.redirect(302, '/signup');
    }
    res.redirect(302, '/signup');
  });

  app.post('/api/login', function(req, res){
    findUser(req, res);
    if(!user){
      res.redirect('/login');
    } else {
      user.comparePassword(req, res);
      if(!err){
        res.redirect(302, '/profile');
      } else {
        res.redirect('/login');
      }
    }
  });
};
