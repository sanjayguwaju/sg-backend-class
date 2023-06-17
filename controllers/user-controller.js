const {getAllUser,createUser} = require('../services/user-services');

const getAllUserController = async (req, res, next) => {
  try {
    const users = await getAllUser(); // Retrieve all users from the database

    res.status(200).json(users); // Send the users array as JSON
  } catch (err) {
    next(err);
  }
};

const createUserController = async (req, res, next) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = { 
  getAllUserController,
  createUserController
};

