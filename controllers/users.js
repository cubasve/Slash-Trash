const Alternative = require("../models/alternative");
const Item = require("../models/item");
const User = require('../models/user');

module.exports = {
	listSwap,
	showSwap,
	createSwap,
	deleteSwap,
};

//1. user is logged in via OAuth
//2. make request to server --> go through passport middleware 
//3. passport pulls userID out of session and fetch user from database
//4. attach user document to req.user --> REQ.USER = LOGGED IN USER VIA OAUTH
//swaps are now attached to logged in user
function listSwap(req, res) {
	if (!req.user) {
		return res.redirect('/');
	}
	User.findById(req.user._id).populate('swapsForUser.item').populate('swapsForUser.alternative').exec(function (err, user) {
		console.log(user);
		res.render('users', { user: user });
	})
	//name of EJS file - not /swaps, /users
	//render a view
}

function showSwap(req, res) {
	if (!req.user) {
		return res.redirect('/');
	}
	User.findById(req.user._id).populate('swapsForUser.item').populate('swapsForUser.alternative').exec(function (err, user) {
		console.log(user);
		res.render('/showSwaps', { user: user });
	})
}

function createSwap(req, res) {
	req.user.swapsForUser.push(req.body); //req.body = POST REQUEST --> data is inside body --> What's the data? item and alternative's id's 
	// req.user.save(function (err) {
	// 	res.redirect("/alternatives");
	// });

	req.user.save(function (err, swapsForUser) {
		res.redirect('/swaps');
	});
}

//RESTful route: DELETE /swaps/:id
function deleteSwap(req, res) {
	req.user.swapsForUser.pull(req.params.id); //get the id of item and alternative (req.body);
	req.user.save(function (err, user) {
		res.redirect('/swaps');
	});
}
//get the specific fact to delete (_id)
//use the mongoose method to remove an embedded document from the student instance (req.user === STudent instance)
//make sure the record is updated (save)
//redirect back to /swaps







