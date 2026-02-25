const User = require('../models/User');

// @desc    Register
// @route   POST /auth/register
// @access  Public
exports.register = (req, res, next) => {
    res.status(200).json({success:true});
};