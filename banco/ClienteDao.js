var connection = require('../libs/mysql_connector.js');

function connectar(){

  if(!connection){
    connection.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });
  }

}

exports.salvar = function salvar(cliente){

    connectar();

    var sql = "insert into cliente(nome,cpf,email) "+
    "values (?)";
    var par = [[cliente.nome,cliente.cpf,cliente.email]]

    connection.query(sql, par, function(err, result) {
      if(err) throw err;
      console.log("Cadastro feito com sucesso!")
    });

}
