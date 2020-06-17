const express = require("express");
const router = express.Router();
const Alternative = require("../controllers/alternatives");
const userCtrl = require("../controllers/users");
// const Item = require("../models/item");
// const Alternative = require("../models/alternative");
// const userSwap = require("../models/userSwap");

router.post("/", userCtrl.createSwap);
router.delete("/", userCtrl.deleteSwap);

module.exports = router;
