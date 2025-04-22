const express = require("express");

const router = express.Router();

const {
  getAllusers,
  getSingleUser,
  addUserData,
  updateUserData,
  deleteUserData,
} = require("../controllers/userControllers");

// MIDDLE WARE 
const upload = require("../middlewares/upload")

router
  .route("/")
  .get(getAllusers)
  .post(upload.single('file'), addUserData);

router
  .route("/:id")
  .get(getSingleUser)
  .put(updateUserData)
  .delete(deleteUserData);

module.exports = router;
