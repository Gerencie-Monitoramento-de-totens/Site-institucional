var express = require("express");
var router = express.Router();

var fastfoodController = require("../controllers/fastfoodController");


router.post("/cadastrarEmpresa", function (req, res) {
    fastfoodController.cadastrarEmpresa(req, res);
})


module.exports = router;