const mongoose = require("mongoose");

const expenseList = new mongoose.Schema({
  userId: String,
  money: String,
  ctg: String,
  des: String,
});

module.exports = mongoose.model("expenseList", expenseList);
