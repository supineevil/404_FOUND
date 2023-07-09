const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser,
  getUserDetailAdmin,
  updateUserRole,
  deleteUser,
  addAdress,
} = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();
//return user object with name,email and everything :refer to userModel.js and also gives JWT token to cookies
router.route("/register").post(registerUser);
//return user object :refer to userModel.js and give JWT token to cookies
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
//removes token from cookie i.e., have to login again
router.route("/logout").get(logout);
//add address for a user.
router.route("/addAddress").post(isAuthenticatedUser, addAdress);
//gives complete user profile
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);
router
  .route("/admin/allUsers")
  .get(isAuthenticatedUser, authorizeRoles("Admin"), getAllUser);
router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizeRoles("Admin"), getUserDetailAdmin)
  .put(isAuthenticatedUser, authorizeRoles("Admin"), updateUserRole)
  .delete(isAuthenticatedUser, authorizeRoles("Admin"), deleteUser);
module.exports = router;
