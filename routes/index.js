const express = require("express");
const router = express.Router();
const itemCtrl = require("../controllers/items"); //require in functions from controllers

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Slash Trash" });
});

// router.get("/", function (req, res, next) {
//   res.redirect("/alternatives"); //this won't work because it immediately directs user to /alternatives
// });

router.get("/alternatives", function (req, res) {
  res.redirect("/alternatives"); //this won't work because it immediately directs user to /alternatives
});

//redirect to /alternatives page to search for swaps

// router.post('/items', itemCtrl.seed); //not sure about path
// router.get('/success', itemCtrl.seedSuccess);

module.exports = router;
