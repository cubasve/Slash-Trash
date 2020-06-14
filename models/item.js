const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema ({
	id: Number,
	houseItem: String,
	category: String,
	alternatives: [{type: Schema.Types.ObjectId, ref: 'Alternative'}], 
});

module.exports = mongoose.model('Item', itemSchema);
