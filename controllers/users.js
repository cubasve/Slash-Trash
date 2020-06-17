const User = require('../models/user');


function index(req, res, next) {
	...
		res.render('users/index', {
			users,
			user: req.user,
			name: req.query.name,
			sortKey
		});
	});
}



