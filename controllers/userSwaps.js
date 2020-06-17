const Alternative = require("../models/alternative");
const Item = require("../models/item");
const userSwap = require('../models/userSwap');

module.exports = {
  create,
  deleteSwap,
};

function create(req, res) {
	
	res.render("swaps");
}

function create(req, res) {
  Movie.findById(req.params.id, function(err, movie) {
    movie.reviews.push(req.body);
    movie.save(function(err) {
      res.redirect(`/movies/${movie._id}`);
    });
  });
}



function deleteSwap(req, res) {//}
