var totemModel = require("../models/totemModel");

var sessoes = [];



function listar(req, res) {
    totemModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idTotem = req.body.idTotemServer;
    var idFastFood = req.body.idFastFoodServer;
    var usario = req.body.usuarioServer;
    var senha = req.body.senhaServer;
    

    // Faça as validações dos valores
    if  (idTotem == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        totemModel.cadastrar(idTotem, idFastFood, usuario, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
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

function alterarStatus(req, res) {
    var isAtivo = req.body.isAtivo;
    var idTotem= req.params.idTotem;

    console.log("aqui")
    totemModel.alterarStatus(isAtivo, idTotem)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}


module.exports = {
    cadastrar,
    listar,
    alterarStatus
}