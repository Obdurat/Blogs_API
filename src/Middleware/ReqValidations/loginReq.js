const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const loginReq = (req, res, next) => {
  const { error } = loginSchema.validate(req.body, { abortEarly: false, stripUnknown: true });
  if (error) {
    const message = 'Some required fields are missing';
    return res.status(400).json({ message });
  }
  return next();
};

module.exports = loginReq;