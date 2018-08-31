var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "node_db"
});

module.exports = connection;
