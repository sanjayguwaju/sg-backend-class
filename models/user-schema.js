const mongoose = require('mongoose');

// Schema === Rules
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
  }
});


// Model === Collection
const User = mongoose.model('User', userSchema);

module.exports = User;