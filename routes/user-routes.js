const express = require('express');
const { getAllUserController, createUserController } = require('../controllers/user-controller');
const router = express.Router();

router.get('/getuser', getAllUserController); // Get all users
router.post('/adduser', createUserController); // Create a new user
router.delete('/deleteuser', createUserController); // Delete a new user
router.put('/updateuser', createUserController); // Create a new user
router.get('/usersname', createUserController); // Create a new user
router.get('/usersemailandpassword', createUserController); // Create a new user

module.exports = router;