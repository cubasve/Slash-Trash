const Alternative = require("../models/alternative");
const Item = require("../models/item");
const User = require("../models/user");

module.exports = {
  index,
};

async function index(req, res) {
  let item = null; //don't want any item appearing --> blank page with search bar
  let didSearch = false; //default: user didn't search for anything
  if (req.query.q) {//req.query only exists if user searched for something --> /alternatives?q=shampoo (searched for shampoo)
    // if this is responding to form submission (search)
    // get the item that matches the search
    // render page with item
    try {
      const regEx = new RegExp(`.*${req.query.q}.*`, "i");
      // . = matches any character except line breaks
      //* = matches preceding character class 0 or more times
      //i = case insensitive --> pAn would still be valid
      didSearch = true; //user searched for something
      item = await Item.findOne({ houseItem: regEx }).populate("alternatives"); //1st item that matches the search --> could change to findAll in the future
      //
    } catch (err) {
      console.error(err); // pass error message
    }
  }
  console.log(item);

  res.render("alternatives", {
    title: "Search for alternatives",
    item,
    didSearch,
  });
  //1st argument: path --> /alternatives
}

