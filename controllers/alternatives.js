const itemSeed = require('../data'); //get seed data from data.js
const Alternative = require('../models/item'); //get model's data

module.exports = {
	// search,
	index,
}

//Why use AJAX? clicking a link or submitting a form doesn't trigger a page reload
// function search(req, res) {
// 	//search parameters are going to be inside req.query
// 	let searchQuery = req.query.q;
// }

// function index(req, res, next) {
//   res.render('index', { title: 'Slash Trash' });
// });

function index(req, res, next) {
  res.render(console.log('Alternative page works'));
}
