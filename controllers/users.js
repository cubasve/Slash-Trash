const Alternative = require("../models/alternative");
const Item = require("../models/item");
const User = require('../models/user');

module.exports = {
	createSwap,
	deleteSwap,
};

function createSwap(req, res) {
	req.user.swapsForUser.push(req.body); //req.body = item and alternative's id's
	req.user.save(function (err) {
		res.render()
		res.redirect("/alternatives"); //swaps are attached to user
	})
}


// function create(req, res) {
// 	Movie.findById(req.params.id, function (err, movie) {
// 		movie.reviews.push(req.body);
// 		movie.save(function (err) {
// 			res.redirect(`/movies/${movie._id}`);
// 		});
// 	});
// }

function deleteSwap(req, res) { }




// function index(req, res, next) {
// 	...
// 	res.render('users/index', {
// 		users,
// 		user: req.user,
// 		name: req.query.name,
// 		sortKey
// 	});
// });
// }



