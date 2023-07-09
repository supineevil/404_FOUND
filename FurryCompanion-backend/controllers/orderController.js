const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Booking = require("../models/bookingsModel");
const Pet = require("../models/petModel");
const ErrorHandler = require("../utils/errorhandler");

//Create a booking
module.createBooking = catchAsyncErrors(async (req, res, next) => {
  const { booker_id, bookie_id, date_from, date_to } = req.body;
  let bookedDates;
  const bookie = await Pet.findById(bookie_id).populate(booking);
  bookedDates = bookie.booking;
  let i = 0;
  while (i < bookedDates.length) {
    if (i >= date_from || i <= date_to) {
      res.status(200).json({
        success: true,
        message: "booking not possible",
      });
    }
    i++;
  }
  const newBooking = await Booking.create({
    booker_id,
    bookie_id,
    date_from,
    date_to,
  });
  bookie.booking.push(newBooking._id);
  bookie.save();
  res.status(200).json({
    success: true,
    message: "Booking confirmed",
  });
});
//Cancel a booking
exports.deleteBooking = catchAsyncErrors(async (req, res, next) => {
  const booking = await Booking.findById(req.params.id);
  if (!post) {
    return next(
      new ErrorHandler(`Booking not found with ID: ${req.params.id}`)
    );
  }
  await booking.remove();
  res.status(200).json({
    success: true,
    message: "Booking canceled successfully",
  });
});
//Get all bookings
exports.getAllBooking = catchAsyncErrors(async (req, res, next) => {
  const booking = await Booking.find().populate("bookerId", "bookieId");
  res.status(200).json({
    success: true,
    booking,
  });
});
//Get all bookings for a single user
exports.getBookings = catchAsyncErrors(async (req, res, next) => {
  const userDet = User.findById(req.params.id).populate("booking");
  if (!userDet) {
    return next(new ErrorHandler(`User not found`));
  }
  res.status(200).json({
    success: true,
    userDet,
  });
});
