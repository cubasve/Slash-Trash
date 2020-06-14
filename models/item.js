const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema ({
	title: String,
	category: String,
	alternative: [{type: Schema.Types.ObjectId, ref: 'Alternative'}],
});

module.exports = mongoose.model('Item', itemSchema);
