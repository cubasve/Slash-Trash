// const axios = require("axios");
// const itemSeed = require("../data"); //get seed data from data.js
const Alternative = require("../models/alternative"); //get model's data
const Item = require("../models/item");

module.exports = {
  // search,
  index,
  // create,
};

//Why use AJAX? clicking a link or submitting a form doesn't trigger a page reload
//use axios to make call to search
//What is axios? HTTP client
// async function search(req, res) {
//   //search parameters are going to be inside req.query
//   let searchQuery = req.query.q;
//   try {
//     let response = await axios.get(`/alternatives&s=${searchQuery}`); //input seeded data);
//     //axios throws an error if status code is other than a 200
//     //data: {} --> 'data' = response that was provided by the server
//     res.json(response.data); //send response data back to client
//   } catch (err) {
//     console.log(err);
//     if (err.response) {
//       return res.status(err.response.status).json(err.response.data);
//     }
//     return res.status(500).jason({ message: "Server Error" });
//     //routing status code & response directly back to client
//   }
// }

async function index(req, res) {
  let item = null;
  let didSearch = false;
  if (req.query.q) {
    // if this is responding to form submission (search)
    // get the item that matches the search
    // render page with item
    try {
      const regEx = new RegExp(`.*${req.query.q}.*`, "i");
      didSearch = true;
      item = await Item.findOne({ houseItem: regEx }).populate("alternatives");
    } catch (err) {
      // pass error message
      console.error(err);
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

// function create(req, res) {
// 	Alternative.create(req.body)
// 	.then(function (alternative){
// 		res.json(alternative);
// 	}).catch(function (err) {
// 		next(err); //falls to error handler
// 	})
// }
