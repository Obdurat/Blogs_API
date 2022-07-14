const sendError = (error, _req, res, _next) => {
    res.status(error.status || 400).json({ message: error.message });
};

module.exports = sendError;