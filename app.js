const express = require('express');
// utilities for working with file and directory paths.
const path = require('path');
// middleware for serving a favicon.
const favicon = require('serve-favicon');
// HTTP request logger middleware
const logger = require('morgan');
// Parse incoming request bodies in a middleware before your handlers, 
const bodyParser = require('body-parser');

const book = require('./routes/book');
const restaurant = require('./routes/restaurant');
const user = require('./routes/user');
const auth = require('./middlware/auth');

const app = express();

// MongoDB object modeling tool designed to work in an asynchronous 
const mongoose = require('mongoose');
// promise library
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/the-restaurant-app', { promiseLibrary: require('bluebird') })
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
// Exposed to outer world, Check angular.json outDir for path
app.use(express.static(path.join(__dirname, 'dist/the-restaurant-app')));

/**
 * // Register all the FE urls here
 app.use('/books', express.static(path.join(__dirname, 'dist/the-restaurant-app')));
 app.use('/book-details/:id', express.static(path.join(__dirname, 'dist/the-restaurant-app')));
 */

// Redirect all the FE urls which starts with /app to index/html
app.all('/app/*', function (req, res) {
  // app.use(express.static(path.join(req.url, 'dist/the-restaurant-app')));
  res.sendFile(path.join(__dirname, 'dist/the-restaurant-app/index.html'));
});

app.use('/book', book);
app.use('/restaurant', auth, restaurant);
app.use('/users', user);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  res.json({
    message: err.message,
    error: err
  });
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  if (!err.status) {
    res.status(500);
    res.json({
      message: err.message,
      error: err
    });
  }

});

module.exports = app;