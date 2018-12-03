var express = require('express');
var router = express.Router();
var model = require('./../modelo/cliente')();

var cliente = {
  _id: null,
  nome: null,
  email: null,
  cpf: null
};

router.get('/', function(req, res, next) {
  model.find(null, function(err, clientes){
    if(err) throw err;
    res.render('cadastrocliente', {title: 'CadastroCliente', clientes: clientes, cliente: cliente});
  });
});

router.post('/add', function(req, res, next) {
  var body = req.body;
  if(body){

    var id = {_id: body._id};
    var cliente = {
      nome: body.nome,
      email: body.email,
      cpf: body.cpf
    };

    if(body._id){
      console.log('Fazer update');
      model.updateOne(id,cliente, function (err, cliente){
        if(err) throw err;
        res.redirect('/cadastroclientes');
      });
    }else{

      console.log('Fazer insert');

      model.create(cliente, function (err, cliente){
        if(err) throw err;
        res.redirect('/cadastroclientes');
      });

    }
  }
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

router.get('/alterar/:id', function(req, res, next){
  var id = req.params.id;
  console.log(id);
  model.findById(id, function (err, cliente){
    if(err){
      throw err;
    }else{
      console.log('O momento que eu quero');
      console.log(cliente._id);
      model.find(null, function(err, clientes){
        if(err) throw err;
        res.render('cadastrocliente', {title: 'CadastroCliente', clientes: clientes, cliente: cliente});
      });
    }
  });

});

module.exports = router;
