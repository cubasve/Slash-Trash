const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  houseItem: String,
  problem: String,
  image: String,
  category: {
    type: String,
    enum: ['Bathroom', 'Kitchen', 'Bedroom', 'Workspace', 'Holidays', 'Energy'],
  },
  alternatives: [{ type: Schema.Types.ObjectId, ref: "Alternative" }],
});

module.exports = mongoose.model("Item", itemSchema);
