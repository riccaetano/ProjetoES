var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var reqRouter = require('./routes/requisitar');
var regRouter = require('./routes/registar');
var defRouter = require('./routes/definicoes');
var artRouter = require('./routes/artigos');
var conRouter = require('./routes/consultar');
var ocoRouter = require('./routes/ocorrencias');

var session = require ('express-session');
var passport = require ('passport');

var app = express();

app.set('view engine', 'jade');
// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
secret: 'wefoiwjfowefvhjv',
resave: false,
saveUninitialized: false,
//cookie: { secure: true}
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/', reqRouter);
app.use('/', regRouter);
app.use('/', defRouter);
app.use('/', artRouter);
app.use('/', conRouter);
app.use('/', ocoRouter);


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
  res.send('error');
});

module.exports = app;
