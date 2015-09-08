var express = require('express');
var app = express();

module.exports = function(app){
  
  app.post('/api/signup', function(req, res){
    res.redirect(302, '/profile');
  });

  app.post('/api/login', function(req, res){
    res.redirect(302, '/profile');
  });
};
