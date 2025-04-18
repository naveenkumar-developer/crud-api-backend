const express = require("express");

const router = express.Router();

const {
  getAllusers,
  getSingleUser,
  addUserData,
  updateUserData,
  deleteUserData,
} = require("../controllers/userControllers");

router
  .route("/")
  .get(getAllusers)
  .post(addUserData);

router
  .route("/:id")
  .get(getSingleUser)
  .put(updateUserData)
  .delete(deleteUserData);

module.exports = router;
