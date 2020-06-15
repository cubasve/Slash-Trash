const itemSeed = require('../data');
const Item = require('../models/item');

module.exports = {
  seed,
  seedSuccess,
}

function seedSuccess(req, res, next) {
	res.render('Success');
}


function seed(req, res, next) {
	Item.deleteMany({}) //Why? Don't want duplicates in db when server reloads
	Item.insertMany(itemSeed.householdItem)
	.then(function(householdItem) {
			console.log(householdItem.length);
			res.redirect('/seed/success')
	}).catch(function (err) {
			next(err);
	})
}


