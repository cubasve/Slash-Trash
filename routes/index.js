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
    successRedirect: "/",
    failureRedirect: "/",
  })
);

// OAuth logout route
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

//redirect to /alternatives page to search for swaps

// router.post('/items', itemCtrl.seed); //not sure about path
// router.get('/success', itemCtrl.seedSuccess);

module.exports = router;
