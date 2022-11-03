var express = require("express");
var router = express.Router();

var totemController = require("../controllers/totemController");



router.get("/listar", function (req, res) {
    totemController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarTotem", function (req, res) {
    totemController.cadastrar(req, res);
})

router.put("/alterarStatus/:idTotem", function (req, res) {
    console.log("aqui")
    totemController.alterarStatus(req, res);
});


module.exports = router;