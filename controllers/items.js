// const data = require("../data"); //get seed data from data.js
// const Item = require("../models/item"); //get model's data

module.exports = {
  // seed,
  // seedSuccess,
  index,
};

function index(req, res, next) {
  res.render("/items", { title: "Swaps List" });
}

// //not needed since I seeded data in seeds.js
// function seed(req, res, next) {
//   Item.deleteMany({}); //Don't want duplicates in db when server reloads
//   Item.insertMany(data.householdItem) //
//     .then(function (householdItem) {
//       console.log(householdItem);
//       res.redirect("/"); //not sure about path
//     })
//     .catch(function (err) {
//       next(err);
//     });
// }

// function seedSuccess(req, res, next) {
//   res.render("Success");
// }

const data = require("../data.js"); //add ../
let seed = function (req, res, next) {
  let houseHold = JSON.parse(data.householdItem);
  houseHold.forEach(
    (h) => {
      let newHouse = item.create({
        houseItem: h.houseItem,
        category: h.category,
        alternatives: [],
      });
    },
    function (err) {
      console.log(err);
    }
  );
};

let seedEco = function (req, res, next) {
  let alts = JSON.parse(data.ecoAlternative);
  alts.forEach(
    (a) => {
      let newHouse = item.create({
        swap: a.swap,
        description: a.description,
      });
    },
    function (err) {
      console.log(err);
    }
  );
};
