const express = require('express');
const uuidv4 = require('uuid/v4');
const SHA512 = require("crypto-js/sha512");
const jwt = require('jsonwebtoken');

const config = require('./../config');
const User = require('../models/User.js');

const router = express.Router();

router.post('/authenticate', (req, res, next) => {
  // Get salt for given username
  User.find({ username: req.body.username }, (err, users) => {
    if (users.length == 0) return next(Error('Invalid username'));
    const user = users[0];
    const password = req.body.password + user.salt;
    const hashedPassword = SHA512(password);
    if (user.password != hashedPassword) return next(Error('Invalid password'))

    // Generate JWT and send in response
    const jwtInfo = {
      expiresIn: config.AUTH.EXPIRY,
      issuer: config.APP,
      subject: user.username,
    };
    const jwtToken = jwt.sign(jwtInfo, config.AUTH.SECRET);
    res.send({
      username: user.username,
      firstName: user.firstName,
      role:user.role,
      token: jwtToken
    });
  })
});

router.post('/register', (req, res, next) => {
  // 1. Check if user exists with same username, if exists send error response
  User.find({ username: req.body.username }, (err, users) => {
    if (users.length != 0) return next(Error('User with this username already exists'));
  })

  // 2. Generate Salt and appned it with password
  const salt = uuidv4();
  const password = req.body.password + salt;

  // 3. Hash Password
  const hashedPassword = SHA512(password);

  const user = {
    username: req.body.username,
    password: hashedPassword,
    salt,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    role:req.body.role
  };

  // 4. Store User in db
  // 5. Send success response
  User.create(user, (err, user) => {
    if (err) return next(err);
    res.send('Registeration Succcess');
  });
});

  /* GET ALL USERS */
  router.get('/', function(req, res, next) {
    User.find(function (err, products) {
      if (err) return next(err);
      res.json(products);
    });
  });

module.exports = router;