const Alternative = require("../models/alternative");
const Item = require("../models/item");
const User = require("../models/user");

module.exports = {
  listSwap,
  createSwap,
  deleteSwap,
};

function listSwap(req, res) {
  if (!req.user) {
    return res.redirect("/alternatives");
  }
  User.findById(req.user._id)
    .populate("swapsForUser.item")
    .populate("swapsForUser.alternative")
    .exec(function (err, user) {
      if (err) return err;
      res.render("userSwaps", { user: user });
      console.log(user);
    });

}

function createSwap(req, res) {
  req.user.swapsForUser.push(req.body);
  req.user.save(function (err, swapsForUser) {
    res.redirect("/swaps");
  });
}

function deleteSwap(req, res) {
  req.user.swapsForUser.pull(req.params.id);
  //   req.user.swapsForUser.remove(req.params.id);
  //Don't need BOTH pull() AND remove() --> they do the same thing - choose one
  req.user.save(function (err, user) {
    res.redirect("/swaps");
  });
}
