const Alternative = require("../models/alternative");
const Item = require("../models/item");
const User = require("../models/user");

module.exports = {
  index,
};

async function index(req, res) {
  let item = null;
  let didSearch = false;
  if (req.query.q) {
    try {
      const regEx = new RegExp(`.*${req.query.q}.*`, "i");
      didSearch = true;
      item = await Item.findOne({ houseItem: regEx }).populate("alternatives");
    } catch (err) {
      console.error(err);
    }
  }
  console.log(item);

  res.render("alternatives", {
    title: "Search for alternatives",
    item,
    didSearch,
  });
}

