const Pet = require("../models/petModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorhandler");
const userTypeModel = require("../models/userTypeModel");
//Register a pet
exports.registerPet = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await Pet.create({
    name,
    email,
    password,
    avatar: {
      public_id: "This is a sample Id",
      url: "profilepicUrl",
    },
  });
  sendToken(user, 200, res);
});
//Login Pet
exports.loginPet = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  //checking if user has given password and email both
  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }
  const user = await Pet.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  const isPasswordMatched = await Pet.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  sendToken(user, 200, res);
});
//Get Pet Detail
exports.getPetDetails = catchAsyncErrors(async (req, res, next) => {
  const user = await Pet.findById(req.user.id);
  if (!user) {
    return next(new ErrorHandler("No pet found"));
  }
  res.status(200).json({
    success: true,
    user,
  });
});
//Get all pet
exports.getAllPet = catchAsyncErrors(async (req, res, next) => {
  const pet = await Pet.find();
  if (!pet) {
    return next(new ErrorHandler("No pet found"));
  }
  res.status(200).json({
    success: true,
    pet,
  });
});
//Add new category
exports.addCategory = catchAsyncErrors(async (req, res, next) => {
  const { category } = req.body;
  const newCategory = await userTypeModel.create(category);
  res.status(200).json({
    success: true,
    newCategory,
  });
});
