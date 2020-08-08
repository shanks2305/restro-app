require('dotenv').config();
const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/user');

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const encPassword = await bcrypt.hash(password, salt);
  const user = new User({
    name,
    email,
    password: encPassword,
  });
  try {
    const savedUser = await user.save();
    return res.status(200).json(savedUser);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: 'Enter a valid email and password' });
  }
  const validatePwd = await bcrypt.compare(password, user.password);
  if (!validatePwd) return res.status(400).json({ error: 'Enter a valid email and password' });
  // eslint-disable-next-line no-underscore-dangle
  const token = await jwt.sign({ _id: user._id }, process.env.SECRET);
  // eslint-disable-next-line no-underscore-dangle
  return res.status(200).header('auth-token', token).json({ id: user._id, token });
});
module.exports = router;
