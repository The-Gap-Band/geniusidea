module.exports = function(app){

  app.route('/api/profile')
  .get(function(req, res){
    res.send(res);
  });

  app.route('/api/addHabit')
  .post(function(req,res){
    
    res.send(201, 'Success');
   
  });

  app.route('/api/updateHabit')
  // data to send to database will be the second param
  .post(function(req, res){
    res.send(201, 'Success');
  });

}