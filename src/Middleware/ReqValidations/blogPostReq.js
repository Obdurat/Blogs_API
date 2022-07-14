const Joi = require('joi');

const BlogPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().min(2).required(),
});

const blogPostReq = (req, res, next) => {
  const { error } = BlogPostSchema.validate(req.body);
  if (error) {
    const message = error.details[0].context.label === 'categoryIds'
    ? '"categoryIds" not found' : 'Some required fields are missing';
    return res.status(400).json({ message });
  }
  return next();
};

module.exports = blogPostReq;
