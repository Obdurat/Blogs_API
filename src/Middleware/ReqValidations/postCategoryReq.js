const Joi = require('joi');

const categorySchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': '"name" is required',
  }),
});

const postCategoryReq = (req, res, next) => {
  const { error } = categorySchema.validate(req.body, { abortEarly: false, stripUnknown: true });
  if (error) {
    const { message } = error.details[0];
    return res.status(400).json({ message });
  }
  return next();
};

module.exports = postCategoryReq;