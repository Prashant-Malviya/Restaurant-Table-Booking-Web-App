const express = require('express');
const router = express.Router();
const Booking = require('../model/bookingModel'); 

// Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new booking
router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a booking
router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updatedBooking = await Booking.findByIdAndUpdate(id, req.body, {
        new: true, 
      });
      if (!updatedBooking) {
        return res.status(404).json({ message: 'Booking not found' });
      }
      res.status(200).json(updatedBooking);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

// Delete a booking by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Booking.findByIdAndDelete(id);
    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
