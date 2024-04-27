const mongoose = require("mongoose");

const premiumModel = new mongoose.Schema({
  userId: String,
  isActivated: Boolean,
});

module.exports = mongoose.model("premium", premiumModel);
