const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSwapSchema = new Schema({
  item: { type: Schema.Types.ObjectId, ref: "Item" },
  alternative: { type: Schema.Types.ObjectId, ref: "Alternative" },
});

const userCommentSchema = new Schema({
  comment: String,
});

const userSchema = new Schema({
  name: String,
  email: String,
  googleId: String,
  swapsForUser: [userSwapSchema],
  comment: [userCommentSchema],
});

module.exports = mongoose.model("User", userSchema);
