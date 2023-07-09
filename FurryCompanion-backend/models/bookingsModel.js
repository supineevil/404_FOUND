const mongoose = require("mongoose");
const User = require("./userModel");

const bookingSchema = new mongoose.Schema({
  bookerId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  bookieId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  dateFrom: {
    type: Date,
  },
  dateTo: {
    type: Date,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
