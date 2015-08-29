var pg = require('pg');

//========================================================//
//   Database Routes                                      //
//========================================================//
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/postgres';

app.get('/api/profile', function(req, res){
  
});

app.post('/api/addHabit', function(req, res){
  pg.connect(connectionString, function(err, client, done){
    // var query = client.query('SELECT text, vote FROM topics');
    // var rows = []; // Array to hold values returned from database
    if (err) {
      return console.error('error running query', err);
    }
    // query.on('row', function(row) {
    //   rows.push(row);
    // });
    // query.on('end', function(result) {
    //   client.end();
    //   return res.json(rows);
    // });
  });
});

app.post('/api/updateHabit', function(req, res){
  pg.connect(connectionString, function(err, client, done){

});

module.exports = db;