const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS package
const orderRoutes = require('./routes/orderRoutes');
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Middleware to parse JSON bodies
require('dotenv').config();

// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/shopDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

// Use Routes
app.use('/api', orderRoutes);

// const PORT = 5000;
// app.listen(5000, () => console.log(`Server running on port ${PORT}`));
app.listen(5000, () => {
  console.log('Server is listenin on PORT :' + PORT);
})