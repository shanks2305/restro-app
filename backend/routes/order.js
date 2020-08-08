/* eslint-disable no-underscore-dangle */
const router = require('express').Router();
const Order = require('../model/order');
const { isAuthenticated, isAdmin } = require('../middleware');

router.get('/', isAuthenticated, isAdmin, async (req, res) => {
  try {
    const orders = await Order.find({}).exec();
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get('/:oid', isAuthenticated, async (req, res) => {
  const id = req.params.oid;
  try {
    const order = await Order.findById(id).exec();
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post('/createOrder', isAuthenticated, async (req, res) => {
  const uid = req.user._id;
  try {
    const order = new Order({
      user: uid,
      items: req.body.items,
      total: req.body.total,
    });
    const createdOrder = await order.save();
    res.status(200).json(createdOrder);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
