const User = require('../models/User');

// @desc    Register
// @route   POST /auth/register
// @access  Public
exports.register = async (req, res, next) => {
    try {
        // Get body request
        const {name, telephone, email, password, role} = req.body;

        // Register
        const user = await User.create({
            name,
            telephone,
            email,
            password,
            role
        });

        // Create token for JWT
        const token = user.getSignedJwtToken();

        res.status(201).json({
            success: true,
            data: user,
            token
        });
    }catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
        console.error(err.message);
    }
};