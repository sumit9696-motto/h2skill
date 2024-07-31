import express from "express";
import {
  addToAilist,
  changePassword,
  deleteMyProfile,
  deleteUser,
//   forgetPassword,
  getAllUsers,
  getMyProfile,
  login,
  logout,
  register,
  removeFromAilist,
  //   resetPassword,
  updateProfile,
  //   updateprofilepicture,
  updateUserRole,
} from "../controllers/userController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
// import singleUpload from "../middlewares/multer.js";

const router = express.Router();

// To register a new user
router.route("/register").post(register);

// Login
router.route("/login").post(login);

// logout
router.route("/logout").get(logout);

// Get my profile
router.route("/me").get(isAuthenticated, getMyProfile);

// Delete my profile
router.route("/me").delete(isAuthenticated, deleteMyProfile);

// ChangePassword
router.route("/changepassword").put(isAuthenticated, changePassword);

// UpdateProfile
router.route("/updateprofile").put(isAuthenticated, updateProfile);

// UpdateProfilePicture
// router
//   .route("/updateprofilepicture")
//   .put(isAuthenticated, updateprofilepicture);

// ForgetPassword
// router.route("/forgetpassword").post(forgetPassword);
// ResetPassword
// router.route("/resetpassword/:token").put(resetPassword);

// AddtoAilist
router.route("/addtoailist").post(isAuthenticated, addToAilist);

// RemoveFromailist
router.route("/removefromailist").delete(isAuthenticated, removeFromAilist);

// Admin Routes
router.route("/admin/users").get(isAuthenticated, authorizeAdmin, getAllUsers);

router
  .route("/admin/user/:id")
  .put(isAuthenticated, authorizeAdmin, updateUserRole)
  .delete(isAuthenticated, authorizeAdmin, deleteUser);

export default router;
