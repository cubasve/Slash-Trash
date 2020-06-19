const express = require("express");
const router = express.Router();
const Alternative = require("../controllers/alternatives");
const userCtrl = require("../controllers/users");

router.get("/", userCtrl.listSwap);
router.post("/", userCtrl.createSwap);
router.delete("/:id", userCtrl.deleteSwap);

module.exports = router;
