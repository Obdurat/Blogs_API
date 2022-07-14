const jwt = require('jsonwebtoken');

const jwtAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Token not found' });
    const credentials = jwt.verify(token, process.env.JWT_SECRET);
    req.credentials = credentials;
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = jwtAuth;