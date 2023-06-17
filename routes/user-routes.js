const express = require('express');
const { getAllUserController, createUserController } = require('../controllers/user-controller');
const router = express.Router();

router.get('/useraauxa', getAllUserController); // Get all users
router.post('/usersbanxa', createUserController); // Create a new user
router.delete('/usersbanxa', createUserController); // Create a new user
router.put('/usersbanxa', createUserController); // Create a new user
router.get('/usersname', createUserController); // Create a new user
router.get('/usersnamekathmandu', createUserController); // Create a new user

module.exports = router;