const jwt = require('jsonwebtoken');
const config = require('./../config');

const auth = (req, res, next) => {
    const token = req.headers['authorization'] || '';
    jwt.verify(token, config.AUTH.SECRET, (err, decoded) => {
        if (err) return next(Error('Invalid token'))
        next();
    });
};

module.exports = auth;