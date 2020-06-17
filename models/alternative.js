const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alternativeSchema = new Schema({
  // id: String,
  // _id: Schema.Types.ObjectId,
  swap: String,
  description: String,
  // user: (type: mongoose.Schema.Types.ObjectId, ref: 'User');
  //when user is incorporated --> keeps track that it's your alternative
  //give me all the alternatives for this specific user
});

module.exports = mongoose.model("Alternative", alternativeSchema);
