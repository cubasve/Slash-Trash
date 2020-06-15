const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema ({
	// id: Number,
	_id: Schema.Types.ObjectId,
	houseItem: String,
	category: {
		type: String, 
		enum: ['Bathroom', 'Kitchen', 'Living Room', 'Bedroom', 'Workspace'], 
	},
	alternatives: [{type: Schema.Types.ObjectId, ref: 'Alternative'}], 
});

module.exports = mongoose.model('Item', itemSchema);
