const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const validations = require('../validations/usersValidations');

// register form
router.get('/register', userController.register);

// process register
router.post('/register', validations, userController.processRegister);

// login form
router.get('/login', userController.login);

// profile
router.get('/profile', userController.profile);

module.exports = router;