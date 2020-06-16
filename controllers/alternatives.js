const itemSeed = require('../data'); //get seed data from data.js
const Alternative = require('../models/alternative'); //get model's data

module.exports = {
	// search,
	index,
	// create,
}

//Why use AJAX? clicking a link or submitting a form doesn't trigger a page reload
// function search(req, res) {
// 	//search parameters are going to be inside req.query
// 	let searchQuery = req.query.q;
// }


function index(req, res) {
	res.render('alternatives', {title: 'Search for alternatives'});
	//1st argument: path --> /alternatives
}

// function create(req, res) {
// 	Alternative.create(req.body)
// 	.then(function (alternative){
// 		res.json(alternative);
// 	}).catch(function (err) {
// 		next(err); //falls to error handler
// 	})
// }
