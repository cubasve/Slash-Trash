require("./config/database"); // connect this script to the database
const data = require("./data");

const Item = require("./models/item");
const Alternative = require("./models/alternative");
// require('dotenv').config();

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
    const p3 = insertMany(
      data.householdItem.forEach(function (item) {
        Item.create(item);
      })
    );
    const p4 = insertMany(
      data.ecoAlternative.forEach(function (alternative) {
        Alternative.create(alternative);
      })
    );
    // const p3 = data.householdItem.forEach(function (item) {
    //   Item.create(item);
    // });

    // const p4 = data.ecoAlternative.forEach(function (alternative) {
    //   Alternative.create(alternative);
    // });

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

//not needed since I seeded data in seeds.js
// function seed(req, res, next) {
// 	Item.deleteMany({}) //Don't want duplicates in db when server reloads
// 	Item.insertMany(itemSeed.householdItem) //
// 	.then(function(householdItem) {
// 			console.log(householdItem);
// 			res.redirect('/'); //not sure about path
// 	}).catch(function (err) {
// 			next(err);
// 	})
// }

// function seedSuccess(req, res, next) {
// 	res.render('Success');
// }
