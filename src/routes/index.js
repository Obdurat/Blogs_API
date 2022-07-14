const express = require('express');

const Router = express.Router();

Router.route('/user')
  .post((req, res) => res.json({ message: 'Post' }))
  .get((req, res) => res.json({ message: 'Get All' }));

Router.route('/user/:id').get((req, res) =>
  res.json({ message: 'Get', id: req.params.id }));

Router.route('/login').post((req, res) => res.json({ message: 'Login' }));

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
