const {getAllUser,createUser,updateUser,deleteUser} = require('../services/user-services');

const getAllUserController = async (req, res, next) => {
  try {
    const users = await getAllUser(); // Retrieve all users from the database
    res.status(200).json(users); // Send the users array as JSON
  } catch (err) {
    next(err);
  }
};

const createUserController = async (req, res, next) => {
  console.log(req.body); // Log the request body
  try {
    const user = await createUser(req.body);
    console.log(user); // Log the user object
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

// user-controller.js

const updateUserController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await updateUser(id, req.body);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const deleteUserController = async (req, res, next) => {
  try {
    const user = await deleteUser(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}

module.exports = { 
  getAllUserController,
  createUserController,
  updateUserController,
  deleteUserController
};
