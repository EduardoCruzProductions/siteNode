var mysql = require('mysql');

var path = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "node_db"
});

var connection;

module.exports = function() {
  if(!connection){
    connection = path.connect(function(err){
      if(err) throw err;
      console.log("Conectado!");
    })
  }

  return connection;

}
