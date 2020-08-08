/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const User = require('./model/user');

exports.isAuthenticated = async (req, res, next) => {
  const token = req.header('auth-token');
  try {
    const check = await jwt.verify(token, process.env.SECRET);
    req.user = check;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Access denied' });
  }
};

exports.isAdmin = async (req, res, next) => {
  // eslint-disable-next-line no-underscore-dangle
  const id = req.user._id;
  try {
    const user = await User.findById(id).exec();
    // eslint-disable-next-line eqeqeq
    if (user.role == 1) {
      next();
    } else {
      res.status(403).json({ error: 'Access Denied' });
    }
  } catch (error) {
    res.status(403).json(error);
  }
};
