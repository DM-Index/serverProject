const mongoose = require("mongoose");

const Blog = new mongoose.Schema({
  title: {type: String, required: true}
  , body: {type: String, required: true}
  , date: {type: Date, default: new Date()}
})
module.exports = mongoose.model("Blog", Blog)
