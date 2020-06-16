require('./config/database');// connect this script to the database
const data = require('./data');

const Item = require('./models/item');
const Alternative = require('./models/alternative');
require('dotenv').config();

//When I run the seeds command, I want to reset data back to its original state
//delete all items and alternatives to prevent duplicates

//Am I seeding the data here?
const p1 = Item.deleteMany({});
const p2 = Alternative.deleteMany({});
Promise.all([p1, p2])
.then(function (results) {
	console.log(results);
	const p3 = Item.create(data.householdItem);
	const p4 = Alternative.create(data.ecoAlternative);
	return Promise.all([p3, p4]);
}).then(function (results) {
	console.log(results);
}).then(function() {
	process.exit();
})

