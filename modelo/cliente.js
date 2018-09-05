module.exports = function() {
  var db = require('./../libs/connect_db')();
  var Schema = require('mongoose').Schema;

  var cliente = Schema({

    nome: String,
    cpf: String,
    email: String

  });

  return db.model('cliente', cliente);
}
