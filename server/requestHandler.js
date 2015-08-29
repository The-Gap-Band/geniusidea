module.exports = function(app){
  // needs to take in the users input
  // 
  app.route('/api/profile')
  .get(function(req, res){
    res.send('');
  });

  app.route('/api/addHabit')
  .post(function(req, res){
    var habit = req.body;

  });

  app.route('/api/updateHabit')
  .post(function(req, res){
    
  });

} 