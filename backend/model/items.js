const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  img: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Item', itemSchema);
