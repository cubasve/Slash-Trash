const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alternativeSchema = new Schema ({
	id: String,
	swap: String,
	description: String,
});

module.exports = mongoose.model('Alternative', alternativeSchema);
