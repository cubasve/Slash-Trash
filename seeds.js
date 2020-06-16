require("./config/database"); // connect this script to the database
const data = require("./data");

const Item = require("./models/item");
const Alternative = require("./models/alternative");
// require('dotenv').config();

//When I run the seeds command, I want to reset data back to its original state
//delete all items and alternatives to prevent duplicates

//Am I seeding the data here?
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
    });

    const p4 = data.ecoAlternative.forEach(function (alternative) {
      Alternative.create(alternative);
    });
    // const p3 = Item.create(data.householdItem);
    // const p4 = Alternative.create(data.ecoAlternative);

    Promise.all([p3, p4]) //2nd asynchronous function
      .then(function (results) {
        console.log(results);
        // return [p3, p4].save();
      })
      .then(function () {
        process.exit();
      })
      .catch(function (err) {
        console.log(err);
      });
  });
} catch (error) {
  console.log(error);
}
