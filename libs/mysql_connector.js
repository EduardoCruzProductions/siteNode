var mysql = require('mysql');
var connection;

module.exports = function() {

  if(!connection){
    connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "12345"
    });
  }

  return connection;

}
