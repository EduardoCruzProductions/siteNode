var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "nodedb"
});

router.get('/', function(req, res, next) {
  res.render('cadastrocliente');
  if(con === null){
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });
  }
});

router.post('/add', function(req, res, next) {
  var body = req.body;
  console.log("Salvando forumlário...");
  console.log(body);
  var sql = "insert into cliente(nome,cpf,email) values ('"+body.nome+"','"+body.cpf+"','"+body.email+"')";
  console.log(sql);
  con.query(sql, function (err, result) {
   if (err) throw err;
   console.log("1 record inserted");
  });

  res.redirect('/cadastroclientes');
});

module.exports = router;
