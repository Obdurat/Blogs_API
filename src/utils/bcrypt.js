const bcrypt = require('bcrypt');

const genHash = async (password) => bcrypt.hash(password, 10);

const verifyPass = async (password, dbPass) => bcrypt.compareSync(password, dbPass);

module.exports = { genHash, verifyPass };