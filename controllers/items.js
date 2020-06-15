const itemSeed = require('../data'); //get seed data from data.js
const Item = require('../models/item'); //get model's data

module.exports = {
  seed,
  seedSuccess,
}

function seed(req, res, next) {
	Item.deleteMany({}) //Don't want duplicates in db when server reloads
	Item.insertMany(itemSeed.householdItem) //
	.then(function(householdItem) {
			console.log(householdItem);
			res.redirect('/seed/success'); //not sure about path
	}).catch(function (err) {
			next(err);
	})
}

function seedSuccess(req, res, next) {
	res.render('Success');
}

