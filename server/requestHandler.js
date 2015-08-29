module.exports = function(app){
  // needs to take in the users input
  // 
  app.route('/api/addHabit')
  .get(function(req, res){
    res.send(items);
  })
}