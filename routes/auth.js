const express = require('express');

// Controller file
const {register, login, me} = require('../controllers/auth');

// Router
const router = express.Router();

// Auth Middleware
const {protect} = require('../middleware/auth');

// Path and method
router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, me);

module.exports = router;