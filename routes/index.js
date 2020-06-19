const express = require("express");
const router = express.Router();
const passport = require("passport");
const itemCtrl = require("../controllers/items");

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Slash Trash" });
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth callback route
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/alternatives",
    failureRedirect: "/alternatives",
  })
);

// OAuth logout route
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/alternatives");
});

module.exports = router;
