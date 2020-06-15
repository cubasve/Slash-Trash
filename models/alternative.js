const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alternativeSchema = new Schema ({
	// id: String,
	_id: Schema.Types.ObjectId,
	swap: String,
	description: String,
});

module.exports = mongoose.model('Alternative', alternativeSchema);
