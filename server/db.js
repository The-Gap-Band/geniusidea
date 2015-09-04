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
/*Change the database name to your local machine's name*/
  // var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/kmerino';

  var connectionString = process.env.DATABASE_URL || 'postgres://mlsnfeluxqiuff:9ChVkwF-1ypBrOsmB_kNV8rEDi@ec2-54-197-245-93.compute-1.amazonaws.com:5432/de5lornqrnncva';

  //========================================================//
  //   Database Queries                                     //
  //========================================================//
  // ALLOWS USER TO SIGNUP
  app.post('/api/signup', function(req, res){
    var user = req.body.username;
    var password = req.body.password;
    console.log(password);
    pg.connect(connectionString, function(err, client, done){
      var query = client.query('INSERT INTO users(username, password) VALUES ($1, $2)', [user, password]);
      done();
      var rows = [];
      if(err){
        return console.error('error inserting user', err);
      }

      query.on('row', function(row) {
        rows.push(row);
      });
      query.on('end', function(result) {
        client.end();
        console.log('User has been added');
        return res.json(rows);
      });

    });
  }); 

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

  // USER CREATES A NEW HABIT and inserts a null timestamp in updates table
  app.post('/api/habits', function(req, res){
    var habit = req.body.habit;
    pg.connect(connectionString, function(err, client, done){

      // Currently we only post habits for user number 1: Later we will add multiple users
      // var query = client.query("INSERT INTO habits (user_id, habit) VALUES ($1, $2)", [1, habit]);
      var getIDQuery = "(SELECT DISTINCT habits.habit_id FROM habits " + 
                       "WHERE habits.habit = '" + habit + "')"; 

      var habitsQuery = client.query("INSERT INTO habits (user_id, habit) VALUES (" + 1 + ", '" + habit + "');" +
                                     "INSERT INTO updates (habit_id, update) " + 
                                     "VALUES (" + getIDQuery + " , current_timestamp - interval '100 years');");

      done();
      // Array to hold values returned from database
      
      var rows = []; 
      if (err) {
        return console.error('error running query', err);
      }
      habitsQuery.on('row', function(row) {
        rows.push(row);
      });
      habitsQuery.on('end', function(result) {
        client.end();
        console.log('POST has been sent');
        return res.json(rows);
      });


    });
  });

  // GET USER UPDATES TIMES AND FREQUENCY 
  app.get('/api/updateHabit', function(req, res){
    // Returns a JSON object with all habits and a count of how many times they occur
    // Example: [{"habit":"trapping","count":"2"},{"habit":"biking","count":"9"}]
    // CURL COMMAND: curl -i localhost:3000/api/updateHabit
    pg.connect(connectionString, function(err, client, done){
      var query = client.query("SELECT habits.habit, count(updates.habit_id) " + 
                               "FROM habits " + 
                               "INNER JOIN updates " + 
                               "ON habits.habit_id = updates.habit_id " + 
                               "WHERE update > current_timestamp - interval '200 years' " +
                               "GROUP BY habits.habit;");
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
    var habit = req.body.habit;
    pg.connect(connectionString, function(err, client, done){
      // Posts an update to the 'updates' table where the habit_id matches that of the input habit string
      // CURL COMMAND: curl -X POST -d "habit='biking'" localhost:3000/api/updateHabit
      // will update the 'biking' habit
      var getIDQuery = "(SELECT DISTINCT habits.habit_id FROM habits " + 

                      "WHERE habits.habit = '" + habit + "')";

      var query = client.query("INSERT INTO updates (habit_id) " +
                               "VALUES (" + getIDQuery + ")");
      done();

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

  // Changes to test out rebase workflow
};
