var express = require('express');
var app = express();
var db = require('./db.js');
var bodyParser = require('body-parser');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));

module.exports = function(app){
  
  app.post('/api/signup', function (req, res){

    db.newUser(req, res);
    res.redirect(302, '/api/profile.html');

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

  // SHOW EXISTING USER HABITS

  // USER ADDS A NEW HABIT
  app.post('/api/habits', function (req, res){
    addHabit(req, res);

    // new habit is updated to habit list
    // and rendered to client
  });
  
  // USER UPDATES HABIT
  // USER DELETES HABIT 
};
