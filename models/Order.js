const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: { type: String },
  phoneNumber: { type: String},
  momosType: { type: String, required: true },
  rate: { type: String, required: true },
  dish: { type: String, required: true },
  quantity: { type: Number, required: true, default: 1 },
});

module.exports = mongoose.model('Order', orderSchema);
