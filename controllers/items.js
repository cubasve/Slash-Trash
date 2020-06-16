const data = require("../data"); //get seed data from data.js
const Item = require("../models/item"); //get model's data

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

//add ../
let seed = function (req, res, next) {
  //just JS object, not parsing JSOn
  let houseHold = data.householdItem.map((item) => {
    let newItem = new Item({
      //initialize the class
      houseItem: item.houseItem,
      category: item.category,
      alternatives: [],
    });
    newItem.save(function (err, householdItem) {
      if (err) return err;
      console.log(householdItem);
    });
  });
  res.render("index");
};
//newItem.save() is asynchronous so code continues running in background --> while Express code is synchronous --> then it renders the index

let seedEco = function (req, res, next) {
  let alts = data.ecoAlternative;
  alts.forEach(
    (a) => {
      let newHouse = Item.create({
        swap: a.swap,
        description: a.description,
      });
    },
    function (err) {
      console.log(err);
    }
  );
  res.render("index");
};

module.exports = {
  seed,
  seedEco,
  index,
};
