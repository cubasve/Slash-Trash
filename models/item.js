const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  // id: Number,
  _id: Schema.Types.ObjectId,
  houseItem: String,
  category: {
    type: String,
    enum: ["Bathroom", "Kitchen", "Living Room", "Bedroom", "Workspace"],
  },
  alternatives: [{ type: Schema.Types.ObjectId, ref: "Alternative" }],
  user: { type: Schema.Types.ObjectId, ref: "User" }, //keeps track of a specific user's swap list
});

module.exports = mongoose.model("Item", itemSchema);
