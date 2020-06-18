const Alternative = require("../models/alternative");
const Item = require("../models/item");
const User = require('../models/user');

module.exports = {
	createSwap,
	deleteSwap,
};

//1. user is logged in via OAuth
//2. make request to server --> go through passport middleware 
//3. passport pulls userID out of session and fetch user from database
//4. attach user document to req.user --> REQ.USER = LOGGED IN USER VIA OAUTH
function createSwap(req, res) {
	req.user.swapsForUser.push(req.body); //req.body = POST REQUEST --> data is inside body --> What's the data? item and alternative's id's 
	req.user.save(function (err) {
		res.redirect("/alternatives");
		//swaps are now attached to logged in user
	});
}
//


function deleteSwap(req, res) {

}
//get the specific fact to delete (_id)
//use the mongoose method to remove an embedded document from the student instance (req.user === STudent instance)
//make sure the record is updated (save)
//redirect back to /swaps







