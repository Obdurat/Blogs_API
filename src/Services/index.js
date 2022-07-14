const jwt = require('jsonwebtoken');
const Models = require('../database/models');
const { genHash, verifyPass } = require('../utils/bcrypt');
const CustomError = require('../Errors');

const createUser = async (body) => {
  const passHash = await genHash(body.password);

  const [user, created] = await Models.User.findOrCreate({
    where: { email: body.email },
    defaults: { ...body, password: passHash },
  });

  if (!created) throw new CustomError('User already registered', 409);

  const { displayName, email } = user;

  const token = jwt.sign({ displayName, email }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  return token;
};

const loginUser = async (body) => {
  const user = await Models.User.findOne({ where: { email: body.email } });

  if (!user) throw new CustomError('Invalid fields', 400);

  await verifyPass(body.password, user.password);

  const { displayName, email, id } = user;

  const token = jwt.sign({ displayName, email, id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  return token;
};

const getUsers = async () => {
  const users = await Models.User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const getUser = async (id) => {
  const user = await Models.User.findOne({
    attributes: { exclude: ['password'] },
    where: { id },
  });
  if (!user) throw new CustomError('User does not exist', 404);
  return user;
};

const createCategory = async (body) => {
  const category = await Models.Category.build(body);
  await category.save();
  console.log(category);
  return category;
};

const getCategories = async () => {
  const categories = await Models.Category.findAll();
  return categories;
};

const createBlogPost = async ({ categoryIds, ...rest }, credentials) => {
  const blogPost = await Models.BlogPost.build({
    ...rest,
    userId: credentials.id,
  });
  
  await blogPost.save();
  await blogPost.addCategory([...categoryIds]);
  
  return blogPost;
};

module.exports = {
  createUser,
  loginUser,
  getUsers,
  getUser,
  createCategory,
  getCategories,
  createBlogPost,
};
