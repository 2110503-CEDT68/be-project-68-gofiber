const express = require('express');

// Controller file
const {
    getBookings,
    getBooking,
    createBooking,
    updateBooking,
    deleteBooking
} = require('../controllers/bookings');

// Router
const router = express.Router();

// Path and method
router.route('/')
    .get(getBookings)
    .post(createBooking);

router.route('/:id')
    .get(getBooking)
    .put(updateBooking)
    .delete(deleteBooking);

module.exports = router;