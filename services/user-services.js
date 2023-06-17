const User = require('../models/user-schema');

const getAllUser = async () => {
  try {
    const users = await User.find();
    // Find all users in the database with a limit of 20

    return users;
  } catch (err) {
    throw new Error(`Failed to get users: ${err.message}`);
  }
};

const createUser = async (userData) => {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to create user');
  }
};



module.exports = { getAllUser,createUser };