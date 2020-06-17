const express = require("express");
const router = express.Router();
const Alternative = require("../controllers/alternatives");
const userSwaps = require("../controllers/userSwaps");
// const Item = require("../models/item");
// const Alternative = require("../models/alternative");
// const userSwap = require("../models/userSwap");

router.post("/", userSwaps.create);
router.delete("/", userSwaps.deleteSwap);

module.exports = router;
