const express = require('express');

// Controller file
const {register, login} = require('../controllers/auth');

// Router
const router = express.Router();

// Path and method
router.post('/register', register);
router.post('/login', login);

module.exports = router;