// const express = require('express');
// const Order = require('../models/Order'); // Import the Order model

// const router = express.Router();

// // POST request to submit an order
// router.post('/order', async (req, res) => {
//   const { customerName, phoneNumber, momosType, rate, dish, quantity } = req.body;

//   try {
//     // Validate required fields
//     if (!phoneNumber || !momosType || !rate || !dish || quantity == null) {
//       return res.status(400).json({ error: 'Phone Number, Momos Type, Rate, Dish, and Quantity are required' });
//     }

//     // Create and save a new order
//     const newOrder = new Order({
//       customerName: customerName || 'Anonymous', // Optional field
//       phoneNumber,
//       momosType,
//       rate,
//       dish,
//       quantity,
//     });

//     await newOrder.save();
//     res.status(201).json({ message: 'Order placed successfully!', order: newOrder });
//   } catch (err) {
//     console.error('Error placing order:', err);
//     res.status(500).json({ error: 'Failed to place order. Please try again later.' });
//   }
// });

// // GET request to fetch all orders
// router.get('/show', async (req, res) => {
//   try {
//     const orders = await Order.find();
//     res.status(200).json(orders);
//   } catch (err) {
//     console.error('Error fetching orders:', err);
//     res.status(500).json({ error: 'Failed to fetch orders. Please try again later.' });
//   }
// });

// module.exports = router; // Export the router for use in the main server














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

// GET request to fetch all orders
router.get('/show', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    console.error('Error fetching orders:', err);
    res.status(500).json({ error: 'Failed to fetch orders. Please try again later.' });
  }
});

// DELETE request to delete an order by ID
router.delete('/order/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findByIdAndDelete(id);
    
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (err) {
    console.error('Error deleting order:', err);
    res.status(500).json({ error: 'Failed to delete order. Please try again later.' });
  }
});

// PUT request to update an existing order by ID
router.put('/order/:id', async (req, res) => {
  const { id } = req.params;
  const { customerName, phoneNumber, momosType, rate, dish, quantity } = req.body;

  try {
    const order = await Order.findByIdAndUpdate(
      id,
      { customerName, phoneNumber, momosType, rate, dish, quantity },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.status(200).json({ message: 'Order updated successfully', order });
  } catch (err) {
    console.error('Error updating order:', err);
    res.status(500).json({ error: 'Failed to update order. Please try again later.' });
  }
});

module.exports = router; // Export the router for use in the main server
