const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS package
const orderRoutes = require('./routes/orderRoutes');
require('dotenv').config(); // Load environment variables

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Middleware to parse JSON bodies

// Connect to MongoDB using the environment variable for DB connection
mongoose
  .connect(process.env.DBHOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

// Use Routes
app.use('/api', orderRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
