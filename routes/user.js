const express = require("express");
const router = express.Router();
const Alternative = require("../controllers/alternatives");
const userCtrl = require("../controllers/users");

router.get("/", userCtrl.listSwap); //route: /swaps
router.post("/", userCtrl.createSwap);
router.delete("/:id", userCtrl.deleteSwap); //should it be :id?

module.exports = router;
