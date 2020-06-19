const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const logger = require("morgan");
const methodOverride = require('method-override');

require("dotenv").config();

const app = express();

require("./config/database");
require("./config/passport");

const indexRouter = require("./routes/index");
const alternativesRouter = require("./routes/alternatives");
const userSwapsRouter = require("./routes/user");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "Lacieniga",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride('_method'));

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use("/", indexRouter);
app.use("/alternatives", alternativesRouter);
app.use("/swaps", userSwapsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
