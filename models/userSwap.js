const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSwapSchema = new Schema({
  item: { type: Schema.Types.ObjectId, ref: "Item" }, //referencing id's
  alternative: { type: Schema.Types.ObjectId, ref: "Alternative" },
}); //send both id's in forms to create userSwap

module.exports = mongoose.model("UserSwap", userSwapSchema);

//create model called swaps - keeps track of item and alternative #id that user swaps
