var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('cadastrocliente');
});

router.post('/add', function(req, res, next) {
  var body = req.body;
  console.log("Salvando forumlário...");
  console.log(body);
  res.redirect('/cadastroclientes');
});

module.exports = router;
