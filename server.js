const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const logger = require("morgan");

// load the env vars
require("dotenv").config();

const app = express();

// connect to the MongoDB with mongoose
require("./config/database");
require("./config/passport");

//Require routess
const indexRouter = require("./routes/index"); //main page
const alternativesRouter = require("./routes/alternatives"); //search for alternatives (ex. /search)
const userSwapsRouter = require("./routes/user"); //user adds the item (ex. /add)

//Step 1: Make a router for page
//Step 2: Add router to middleware!!
//Step 3: What is the route? HTTP verb : Path
//Step 4: User interface (a href or button)
//Step 5: Routes
//Step 6: Controllers
//Step 7: Views

// view engine setup
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

// makes user available in all EJS views
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

//mount all routes with appropriate base paths
app.use("/", indexRouter); //main page
app.use("/alternatives", alternativesRouter); //search item
app.use("/swaps", userSwapsRouter); //add item

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
