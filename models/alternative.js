const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alternativeSchema = new Schema({
  swap: String,
  description: String,
  image: String,
});

module.exports = mongoose.model("Alternative", alternativeSchema);
