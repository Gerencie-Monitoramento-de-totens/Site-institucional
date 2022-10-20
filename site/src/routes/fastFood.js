var express = require("express");
var router = express.Router();

var fastFoodController = require("../controllers/fastFoodController");

router.get("/listar", function (req, res) {
    fastFoodController.listar(req, res);
});

router.post("/cadastrarFastFood", function (req, res) {
    fastFoodController.cadastrarFastFood(req, res);
})


module.exports = router;