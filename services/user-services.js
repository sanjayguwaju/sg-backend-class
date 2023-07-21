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
    throw new Error('Failed to create user Adarsha');
  }
};

const updateUser = async (adarsha, kushal) => {
  try {
    const user = await User.findByIdAndUpdate(adarsha, kushal, { new: true });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to update user');
  }
};

const deleteUser = async (id) => {
  try {
    const user = await User.findByIdAndDelete(id);
    return user;
  } catch (err) {
    throw new Error(`Failed to delete user: ${err.message}`);
  }
};





module.exports = { getAllUser,createUser,updateUser,deleteUser};