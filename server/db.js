var pg = require('pg');
var bodyParser = require('body-parser');
module.exports = function(app){

//========================================================//
//   Database Routes                                      //
//========================================================//
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/veeweeherman';

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:false}));
  


  //========================================================//
  //   Establish Database Connection                        //
  //========================================================//
/*Change the database name from kmerino to you local machine's name*/
  // var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/kmerino';

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
  pg.connect(connectionString, function(err, client, done){
    var query = client.query("INSERT INTO habits (user_id, habit) VALUES ($1, $2)", [1, habit]);

    /* VY TESTING THE POST QUERY-ING */
    // var query = client.query("INSERT INTO habits (user_id, habit) VALUES (3, 'BRAND SPANKIN NEW HABIT')");



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

// USER UPDATES HABITS
// app.post('/api/updateHabit', function(req, res){
//   pg.connect(connectionString, function(err, client, done){


// });
}
