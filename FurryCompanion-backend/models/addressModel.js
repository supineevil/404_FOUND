const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  locality: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pinCode: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Address", addressSchema);
