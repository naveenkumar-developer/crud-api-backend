const userModel = require("../models/user.model");

const getAllusers = async (req, res) => {
    const users = await userModel.find();
    res.status(200).json(users);
  }

const getSingleUser = async (req, res)=>{
    try {
        const { id } = req.params;
        const user = await userModel.findById(id);
        if (!user) {
          return res.status(404).json({ message: "User Data Not Found" });
        }
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const addUserData = async (req, res)=>{
    try {
        const user = await userModel.create(req.body);
        res.status(200).json(req.file);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}


const updateUserData = async (req, res)=>{
    try {
        const { id } = req.params;
        const user = await userModel.findByIdAndUpdate(id, req.body);
        if (!user) {
          return res.status(404).json({ message: "User Data Not Found" });
        }
        const updatedUserData = await userModel.findById(id);
        res.status(200).json(updatedUserData);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const deleteUserData = async (req, res)=>{
    try {
        const { id } = req.params;
        const user = await userModel.findByIdAndDelete(id, req.body);
        if (!user) {
          return res.status(404).json({ message: "User Data Not Found" });
        }
        res.status(200).json({ message: "User Data Deleted Successfully" });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

module.exports = {getAllusers, getSingleUser, addUserData, updateUserData, deleteUserData}