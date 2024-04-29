const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const ChatSchema = new Schema({
  nick: String,
  msg: String,
  created: { type: Date, default: Date.now },
});

module.exports = model("Chat", ChatSchema);
