var express = require("express");
var router = express.Router();

var fastFoodController = require("../controllers/fastFoodController");


router.post("/cadastrarFastFood", function (req, res) {
    fastFoodController.cadastrarFastFood(req, res);
})


module.exports = router;