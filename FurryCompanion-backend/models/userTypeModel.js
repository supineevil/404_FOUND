const mongoose = require("mongoose");

const userTypeSchema = new mongoose.Schema({
  userType: {
    type: String,
  },
});

module.exports = mongoose.model("UserType", userTypeSchema);
