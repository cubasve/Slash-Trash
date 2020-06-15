const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// load the env vars
require('dotenv').config();

const app = express();

// connect to the MongoDB with mongoose
require('./config/database');

//Require routess
const indexRouter = require('./routes/index');
const itemsRouter = require('./routes/items');
const alternativesRouter = require('./routes/alternatives');
//Step 1: Make a router for page
//Step 2: Add router to middleware!!
//Step 3: What is the route? HTTP verb : Path
//Step 4: User interface (a href)
//Step 5: Routes
//Step 6: Controllers
//Step 7: Views

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//mount all routes with appropriate base paths
app.use('/', indexRouter);
app.use('/items', itemsRouter);
app.use('/', alternativesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
