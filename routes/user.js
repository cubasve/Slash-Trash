const express = require("express");
const router = express.Router();
const Alternative = require("../controllers/alternatives");
const userCtrl = require("../controllers/users");

router.post("/", userCtrl.createSwap);
router.delete("/", userCtrl.deleteSwap); //should it be :id?

module.exports = router;
