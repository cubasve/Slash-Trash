const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSwapSchema = new Schema({
  item: { type: Schema.Types.ObjectId, ref: "Item" }, //referencing id's
  alternative: { type: Schema.Types.ObjectId, ref: "Alternative" },
}); //send both id's in forms to create userSwap

const userSchema = new Schema({
  name: String,
  email: String,
  googleId: String,
  swapsForUser: [userSwapSchema],
});

module.exports = mongoose.model("User", userSchema);
//embed userSwap schema inside userSchema

//use for when you incorporate OAuth
