var express = require('express');
var app = express();
var db = require('./db.js');
var bodyParser = require('body-parser');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));

module.exports = function(app){
  app.post('/api/signup', function (req, res){
    db.newUser(req, res);
    function(err, data){
      if(!err){
        res.redirect('/profile.html');
      } else {
        res.redirect('/signup');
      }
    };
  });
/* DO NOT UNCOMMENT. FUNCTION HASNT BEEN TESTED. WILD WILD WEST*/
  // app.post('/api/login', function(req, res){
  //   findUser(req, res);
  //   if(!user){
  //     res.redirect('/login');
  //   } else {
  //     user.comparePassword(req, res);
  //     if(!err){
  //       res.redirect(302, '/profile');
  //     } else {
  //       res.redirect('/login');
  //     }
  //   }
  // });

};
