const itemSeed = require('../data'); //get seed data from data.js
const Alternative = require('../models/item'); //get model's data

module.exports = {
	search,
}

function search(req, res) {

}

// function index(req, res) {
// 	Alternative.insertMany(itemSeed.ecoAlternative)
// 	.then(function (ecoAlternative) {
// 			console.log(ecoAlternative[1]);
// 	}).catch(function (err) {
// 			next(err);
// 	})
// 	// console.log(itemSeed.ecoAlternative);
// }

// function seed(req, res, next) {
// 	Item.deleteMany({}) //Don't want duplicates in db when server reloads
// 	Item.insertMany(itemSeed.householdItem) //
// 	.then(function(householdItem) {
// 			console.log(householdItem);
// 			res.redirect('/seed/success'); //not sure about path
// 	}).catch(function (err) {
// 			next(err);
// 	})
// }

// function seedSuccess(req, res, next) {
// 	res.render('Success');
// }
