const Order = require('../models/orderModel');

// Create a new order
const createOrder = async (req, res) => {
  const { customerName, phoneNumber, momosType, rate, dish, quantity } = req.body;

  try {
    const newOrder = new Order({
      customerName,
      phoneNumber,
      momosType,
      rate,
      dish,
      quantity,
    });

    await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully!', order: newOrder });
  } catch (error) {
    res.status(500).json({ message: 'Error placing order', error });
  }
};

// Get all orders (for admin or viewing purposes)
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
};
