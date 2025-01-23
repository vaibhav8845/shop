const express = require('express');
const Order = require('../models/Order'); // Import the Order model

const router = express.Router();

// POST request to submit an order
router.post('/order', async (req, res) => {
  const { customerName, phoneNumber, momosType, rate, dish, quantity } = req.body;

  try {
    // Validate required fields
    if (!phoneNumber || !momosType || !rate || !dish || quantity == null) {
      return res.status(400).json({ error: 'Phone Number, Momos Type, Rate, Dish, and Quantity are required' });
    }

    // Create and save a new order
    const newOrder = new Order({
      
        customerName: customerName || 'Anonymous', // Optional field
      phoneNumber,
      momosType,
      rate,
      dish,
      quantity,
    });

    await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully!', order: newOrder });
  } catch (err) {
    console.error('Error placing order:', err);
    res.status(500).json({ error: 'Failed to place order. Please try again later.' });
  }
});

router.get('/show', async (req, res) => {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (err) {
      console.error('Error fetching orders:', err);
      res.status(500).json({ error: 'Failed to fetch orders. Please try again later.' });
    }
  });


module.exports = router; // Export the router for use in the main server
