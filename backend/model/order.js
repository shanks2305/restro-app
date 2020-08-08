const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  items: {
    type: Array,
    default: [],
  },
  total: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Order', orderSchema);
