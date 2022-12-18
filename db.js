const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'shipsmart'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected to database successfully!');
});

module.exports = connection;