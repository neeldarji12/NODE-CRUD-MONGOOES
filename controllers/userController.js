const userModel = require('../model/userModel');

// Add User
const addUser = async (req, res) => {
   try {
      const data = await userModel.create(req.body);
      return res.status(201).send(data);
   } catch (error) {
      return res.status(500).send(error.message);
   }
};

// Get All Users
const getUsers = async (req, res) => {
   try {
      const users = await userModel.find();
      return res.send(users);
   } catch (error) {
      return res.status(500).send(error.message);
   }
};

// Get Single User
const getUser = async (req, res) => {
   try {
      const user = await userModel.findById(req.params.id);
      return res.send(user);
   } catch (error) {
      return res.status(500).send(error.message);
   }
};

// Update User
const updateUser = async (req, res) => {
   try {
      const user = await userModel.findByIdAndUpdate(
         req.params.id,
         req.body,
         { new: true }
      );

      return res.send(user);
   } catch (error) {
      return res.status(500).send(error.message);
   }
};

// Delete User
const deleteUser = async (req, res) => {
   try {
      await userModel.findByIdAndDelete(req.params.id);
      return res.send({
         success: true,
         message: "User Deleted Successfully"
      });
   } catch (error) {
      return res.status(500).send(error.message);
   }
};

module.exports = {
   addUser,
   getUsers,
   getUser,
   updateUser,
   deleteUser
};
