const express = require('express');
const { loginReq, registerReq } = require('../Middleware/ReqValidations');
const Controllers = require('../Controllers');

const Router = express.Router();

Router.route('/user')
  .post(registerReq, Controllers.createUser)
  .get((req, res) => res.json({ message: 'Get All' }));

Router.route('/user/:id').get((req, res) =>
  res.json({ message: 'Get', id: req.params.id }));

Router.route('/login').post(loginReq, Controllers.login);

Router.route('/categories')
  .get((req, res) => res.json({ message: 'Get Category' }))
  .post((req, res) => res.json({ message: 'Post Category' }));

Router.route('/post')
  .post((req, res) => res.json({ message: 'Post post' }))
  .get((req, res) => res.json({ message: 'Get Post' }));

Router.route('/post/:id')
  .get((req, res) => res.json({ message: 'Get Post by id' }))
  .patch((req, res) => res.json({ message: 'patch post' }));

module.exports = Router;
