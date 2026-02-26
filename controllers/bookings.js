const Booking = require('../models/Booking');

// @desc    View all bookings
// @route   GET /api/bookings
// @access  Private only admin
exports.getBookings = async (req, res, next) => {
    try {
        // Get all booking in database
        const bookings = await Booking.find();

        res.status(200).json({
            success: true,
            count: bookings.length,
            data: bookings
        });
    }catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Cannot find bookings"
        });
    }
};

// @desc    View a booking
// @route   GET /api/bookings/:id
// @access  Private
exports.getBooking = async (req, res, next) => {
    try {
        // Find booking by id
        const booking = await Booking.findById(req.params.id);

        // Don't find booking
        if (!booking) {
            return res.status(404).json({ success: false, message: `Booking not found` });
        }

        res.status(200).json({
            success: true,
            data: booking
        });
    }catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Cannot find booking'
        });
    }
};

// @desc    Create a booking
// @route   POST /api/bookings
// @access  Private only user
exports.createBooking = async (req, res, next) => {
    try {
        // Get body request
        const {bookingDate, user, dentist} = req.body;

        // Create a booking in database
        const booking = await Booking.create(
            bookingDate,
            user,
            dentist
        );

        res.status(201).json({
            success: true,
            data: booking
        });
    }catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Cannot create booking'
        });
    }
};

// @desc    Edit a booking
// @route   PUT /api/bookings/:id
// @access  Private
exports.updateBooking = async (req, res, next) => {
    try {
        // Get body request
        const {bookingDate, user, dentist} = req.body;

        // Find booking by id and update
        const booking = await Booking.findByIdAndUpdate(req.params.id, {
            bookingDate,
            user,
            dentist
        }, {
            new: true,
            runValidators: true
        });

        // Don't find booking
        if (!booking) {
            return res.status(404).json({ success: false, message: `Booking not found` });
        }

        res.status(200).json({
            success: true,
            data: booking
        });
    }catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Cannot update booking'
        });
    }
};

// @desc    Delete booking
// @route   DELETE /api/bookings/:id
// @access  Private
exports.deleteBooking = async (req, res, next) => {
    try {
        // Find booking by id and delete
        const booking = await Booking.findByIdAndDelete(req.params.id);

        // Don't find booking
        if (!booking) {
            return res.status(404).json({ success: false, message: `Booking not found` });
        }

        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Cannot delete booking'
        });
    }
};