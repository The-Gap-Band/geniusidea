var pg = require('pg');
var bodyParser = require('body-parser');
module.exports = function(app){

  //========================================================//
  //   Database Routes                                      //
  //========================================================//

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:false}));



  //========================================================//
  //   Establish Database Connection                        //
  //========================================================//
  /*Change the database name from kmerino to you local machine's name*/
  var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/postgres';


  //========================================================//
  //   Database Queries                                     //
  //========================================================//

  // SHOWS USER PROFILE
  app.get('/api/profile', function(req, res){
    pg.connect(connectionString, function(err, client, done){
      var query = client.query('SELECT * from users');
      var rows = []; // Array to hold values returned from database
      if (err) {
        return console.error('error running query', err);
      }
      query.on('row', function(row) {
        rows.push(row);
      });
      query.on('end', function(result) {
        client.end();
        return res.json(rows);      
      });   
    });
  });

  // SHOWS EXISTING USER HABITS
  app.get('/api/habits', function(req, res){
   pg.connect(connectionString, function(err, client, done){
    var query = client.query('SELECT user_id, habit from habits');
    var rows = []; // Array to hold values returned from database
    if (err) {
      return console.error('error running query', err);
    }
    query.on('row', function(row) {
      rows.push(row);
    });
    query.on('end', function(result) {
      client.end();
      return res.json(rows);

    });
  });
 });

  // USER CREATES A NEW HABIT
  app.post('/api/habits', function(req, res){
    var habit = req.body.habit;
    console.log('habit', habit);
    pg.connect(connectionString, function(err, client, done){
      var query = client.query("INSERT INTO habits (user_id, habit) VALUES ($1, $2)", [1, habit]);

      // Array to hold values returned from database
      var rows = []; 
      if (err) {
        return console.error('error running query', err);
      }
      query.on('row', function(row) {
        rows.push(row);
      });
      query.on('end', function(result) {
        client.end();
        return res.json(rows);
      });
    });
  });

  // USER UPDATES HABITS
  app.post('/api/updateHabit', function(req, res){
    var update = req.body.update;
    pg.connect(connectionString, function(err, client, done){
      var query = client.query("INSERT INTO updates (habit_id) VALUES ($1)", [1]);
      var rows = [];
      if (err) {
        return console.error('error running query', err);
      }
      query.on('row', function(row) {
        rows.push(row);
      });
      query.on('end', function(result) {
        client.end();
        return res.json(rows);
      });
    });
  });

  // GET USER UPDATES TIMES AND FREQUENCY 
  app.get('/api/updateHabit', function(req, res){
    // var update = req.body.update;
    pg.connect(connectionString, function(err, client, done){
      var query = client.query("SELECT habit_id, update FROM updates");
      var rows = [];
      if (err) {
        return console.error('error running query', err);
      }
      query.on('row', function(row) {
        rows.push(row);
      });
      query.on('end', function(result) {
        client.end();
        return res.json(rows);
      });
    });
  });
};
