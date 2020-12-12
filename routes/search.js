const express = require("express");
const router = express.Router();
const searchCtrl = require("../controllers/search");

// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

router.get("/", searchCtrl.index);

module.exports = router;

