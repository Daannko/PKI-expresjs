var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session')
var logger = require('morgan');
const fileUpload = require('express-fileupload')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var daneRouter = require('./routes/dane');
var loginRouter = require('./routes/login');
var messagesRouter = require('./routes/messages');

var app = express();
app.locals.ii = 0;
global.ii = 0;
global.logged = 0;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload())

app.use(cookieSession({
  name: 'session',
  keys: ["test"],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dane', daneRouter);
app.use('/login', loginRouter);
app.use('/messages', messagesRouter);





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
