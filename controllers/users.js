const Alternative = require("../models/alternative");
const Item = require("../models/item");
const User = require('../models/user');

module.exports = {
	listSwap,
	showSwap,
	createSwap,
	deleteSwap,
};

function listSwap(req, res) {
	if (!req.user) {
		return res.redirect('/');
	}
	User.findById(req.user._id).populate('swapsForUser.item').populate('swapsForUser.alternative').exec(function (err, user) {
		console.log(user);
		res.render('userSwaps', { user: user });
	})
}

function createSwap(req, res) {
	req.user.swapsForUser.push(req.body);
	req.user.save(function (err, swapsForUser) {
		res.redirect('/swaps');
	});
}


function deleteSwap(req, res) {
	req.user.swapsForUser.pull(req.params.id);
	req.user.swapsForUser.remove();
	req.user.save(function (err, user) {
		res.redirect('/swaps');
	});
}

