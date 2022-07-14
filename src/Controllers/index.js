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

module.exports = { login, createUser };