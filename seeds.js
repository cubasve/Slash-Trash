require("./config/database"); // connect this script to the database
const data = require("./data");

const Item = require("./models/item");
const Alternative = require("./models/alternative");

//When I run the seeds command, I want to reset data back to its original state
//delete all items and alternatives to prevent duplicates

//PROBLEM: nested promise is causing the error
const p1 = Item.deleteMany({});
const p2 = Alternative.deleteMany({});

try {
  //1st asynchronous function
  Promise.all([p1, p2]).then(function (results) {
    console.log(results);
    console.log(data);

    const p3 = data.householdItem.forEach(function (item) {
      Item.create(item);
      Item.save(function (err) {
        if (err) return done(err); //if error,
        return done(null, Item);
      });
      // householdItem.alternatives.forEach(function (swaps) {
      //   Swaps.create(swaps);
      // });
    });

    const p4 = data.ecoAlternative.forEach(function (alternative) {
      Alternative.create(alternative);
      Alternative.save(function (err) {
        if (err) return done(err); //if error,
        return done(null, Item);
      });
    });

    Promise.all([p3, p4]) //2nd asynchronous function
      .then(function (results) {
        console.log(results);
        // return results.save();
      })
      .then(function () {
        process.exit();
      })
      .catch(function (err) {
        console.log(err);
      }); //if it goes through the try without any error, it saves the results
  });
} catch (error) {
  console.log(error); //if not, it console.logs the error to let us know what happened
  next(err);
}

// const data = require("data.js");
// let seed = function (req, res, next) {
//   let houseHold = JSON.parse(data.householdItem);
//   // let alts = JSON.parse(data.ecoAlternative)
//   houseHold.forEach(
//     (h) => {
//       let newHouse = item.create({
//         houseItem: h.houseItem,
//         category: h.category,
//         alternatives: [],
//       });
//     },
//     function (err) {
//       console.log(err);
//     }
//   );
// };
// let seedEco = function (req, res, next) {
//   let alts = JSON.parse(data.ecoAlternative);
//   alts.forEach(
//     (a) => {
//       let newHouse = item.create({
//         swap: a.swap,
//         description: a.description,
//       });
//     },
//     function (err) {
//       console.log(err);
//     }
//   );
// };
