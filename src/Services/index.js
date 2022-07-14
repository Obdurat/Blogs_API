const jwt = require('jsonwebtoken');
const Models = require('../database/models');
const { genHash, verifyPass } = require('../utils/bcrypt');
const CustomError = require('../Errors');

const createUser = async (body) => {
    const passHash = await genHash(body.password);

    const [user, created] = await Models.User
    .findOrCreate({ where: { email: body.email }, defaults: { ...body, password: passHash } });

    if (!created) throw new CustomError('User already registered', 409);

    const { displayName, email } = user;

    const token = jwt.sign({ displayName, email }, process.env.JWT_SECRET, { expiresIn: '1d' });
    
    return token;
};

const loginUser = async (body) => {
    const user = await Models.User.findOne({ where: { email: body.email } });
    if (!user) throw new CustomError('Invalid fields', 400);
    await verifyPass(body.password, user.password);
    const { displayName, email } = user;
    const token = jwt.sign({ displayName, email }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return token;
};

module.exports = { createUser, loginUser };