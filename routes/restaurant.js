var express = require('express');
var router = express.Router();
var Restaurant = require('../models/Restaurant.js');

/* GET ALL RESTAURANTS */
router.get('/', function(req, res, next) {
    Restaurant.find(function (err, restaurant) {
    if (err) return next(err);
    res.json(restaurant);
  });
});

/* GET SINGLE RESTAURANT BY ID */
router.get('/:id', function(req, res, next) {
    Restaurant.findById(req.params.id, function (err, restaurant) {
    if (err) return next(err);
    res.json(restaurant);
  });
});

/* SAVE RESTAURANT */
router.post('/', function(req, res, next) {
  console.log('REWUSEST body'+JSON.stringify(req.body));
    Restaurant.create(req.body, function (err, restaurant) {
    if (err) return next(err);
    res.json(restaurant);
  });
});

/* UPDATE RESTAURANT */
router.put('/:id', function(req, res, next) {
    Restaurant.findByIdAndUpdate(req.params.id, req.body, function (err, restaurant) {
    if (err) return next(err);
    res.json(restaurant);
  });
});

/* DELETE RESTAURANT */
router.delete('/:id', function(req, res, next) {
    Restaurant.findByIdAndRemove(req.params.id, req.body, function (err, restaurant) {
    if (err) return next(err);
    res.json(restaurant);
  });
});

module.exports = router;