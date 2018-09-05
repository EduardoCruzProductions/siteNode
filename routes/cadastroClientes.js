var express = require('express');
var router = express.Router();
var model = require('./../modelo/cliente')();

router.get('/', function(req, res, next) {

  model.find(null, function(err, clientes){
    if(err) throw err;
    res.render('cadastrocliente', {title: 'CadastroCliente', clientes: clientes});
  });

});

router.post('/add', function(req, res, next) {
  var body = req.body;
  console.log("Salvando formulário...");
  console.log(body);

  model.create(body, function (err, cliente){
    if(err) throw err;
    res.redirect('/cadastroclientes');
  })

});

router.get('/remove/:id', function(req, res, next){

  var id = req.params.id;
  console.log(id);

  model.findById(id, function(err, cliente){
    if(err){
      throw err;
    }else{

      model.deleteOne(cliente, function(err){
        if(err) throw err;

      });

    }

    res.redirect('/cadastroclientes');

  });

});

module.exports = router;
