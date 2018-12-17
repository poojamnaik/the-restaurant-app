var express = require('express');
// utilities for working with file and directory paths.
var path = require('path');
// middleware for serving a favicon.
var favicon = require('serve-favicon');
// HTTP request logger middleware
var logger = require('morgan');
// Parse incoming request bodies in a middleware before your handlers, 
var bodyParser = require('body-parser');

var book = require('./routes/book');
var app = express();

// MongoDB object modeling tool designed to work in an asynchronous 
var mongoose = require('mongoose');
// promise library
mongoose.Promise = require('bluebird');


mongoose.connect('mongodb://localhost/mean-angular5', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
console.log();
app.use('/books', express.static(path.join(__dirname, 'dist')));
app.use('/book', book);
app.use('', book); //add this line too

// Redirects to  a route file when this url is hit
app.use('/book', book);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.json({
    message: err.message,
    error: err
  });
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
//   res.status(err.status || 500);
if(!err.status){
    res.status( 500);
    res.json({
      message: err.message,
      error: err
    });
}

//   res.render('error');
//   res.render('error',  { error: err });
});

module.exports = app;