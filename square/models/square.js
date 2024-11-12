const mongoose = require('mongoose');

const mongoURI = 'your_mongodb_connection_string_here'; // Replace with your MongoDB connection string

mongoose.connect(mongoURI, {
  // Remove deprecated options
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Define schema for square
const squareSchema = new mongoose.Schema({
  sideLength: { type: Number, required: true },
  perimeter: { type: Number, required: true },
  area: { type: Number, required: true },
});

// Create model from schema
const Square = mongoose.model('Square', squareSchema);

module.exports = Square;