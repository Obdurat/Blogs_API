const express = require('express');
const { 
  loginReq, 
  registerReq, 
  postCategoryReq, 
  blogPostReq } = require('../Middleware/ReqValidations');

const jwtAuth = require('../Middleware/jwtAuth');
const Controllers = require('../Controllers');

const Router = express.Router();

Router.route('/user')
  .post(registerReq, Controllers.createUser)
  .get(jwtAuth, Controllers.getUsers);

Router.route('/user/:id').get(jwtAuth, Controllers.getUser);

Router.route('/login').post(loginReq, Controllers.login);

Router.route('/categories')
  .get(jwtAuth, Controllers.getCategories)
  .post(postCategoryReq, jwtAuth, Controllers.createCategory);

Router.route('/post')
  .post(jwtAuth, blogPostReq, Controllers.createBlogPost)
  .get((req, res) => res.json({ message: 'Get Post' }));

Router.route('/post/:id')
  .get((req, res) => res.json({ message: 'Get Post by id' }))
  .patch((req, res) => res.json({ message: 'patch post' }));

module.exports = Router;
