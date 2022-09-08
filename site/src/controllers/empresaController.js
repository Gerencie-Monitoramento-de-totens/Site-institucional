var empresaModel = require("../models/empresaModel");

var sessoes = [];
let insertIdResultado = 0;

function cadastrar(req, res) {
    console.log("Aqui");

    var nome = req.body.nomeServer;
    var cnpj = req.body.cnpjServer;
    var cep = req.body.cepServer;
    var numero = req.body.numeroServer;
    console.log(nome);
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }else {
        
        empresaModel.cadastrar(nome, cnpj, cep, numero)
            .then(
                function (resultado) {
                    res.json(resultado);
                    console.log(resultado.insertId)
                    insertIdResultado = resultado.insertId;
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules
module.exports = {
    cadastrar

}

