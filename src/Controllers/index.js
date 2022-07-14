const Services = require('../Services');
const controllerWrapper = require('../utils/controllerWrapper');

const login = controllerWrapper(async (req, res) => {
    const token = await Services.loginUser(req.body);
    return res.status(200).json({ token });
});

const createUser = controllerWrapper(async (req, res) => {
    const token = await Services.createUser(req.body);
    return res.status(201).json({ token });
});

const getUsers = controllerWrapper(async (req, res) => {
    const users = await Services.getUsers();
    return res.status(200).json(users);
});

const getUser = controllerWrapper(async (req, res) => {
    const user = await Services.getUser(req.params.id);
    return res.status(200).json(user);
});

const createCategory = controllerWrapper(async (req, res) => {
    const category = await Services.createCategory(req.body);
    return res.status(201).json(category);
});

const getCategories = controllerWrapper(async (req, res) => {
    const categories = await Services.getCategories();
    return res.status(200).json(categories);
});

const createBlogPost = controllerWrapper(async (req, res) => {
    const { credentials } = req;
    const post = await Services.createBlogPost(req.body, credentials);
    return res.status(201).json(post);
});

module.exports = { 
    login,
    createUser,
    getUsers,
    getUser,
    createCategory,
    getCategories,
    createBlogPost,
};