var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();

app.get('/producto/:idProducto?', function (req,res){
  res.send('Bienvenidos al detalle del producto: ' + req.params.idProducto)
  });

app.get('/productos/:idProducto/comentarios/:idComentario?', function (req,res) {
  if (req.params.idComentario == undefined) {
res.send('Bienvenidos a los comentarios del producto ' + req.params.idProducto);
  } else{
    res.send('Bienvenidos a los comentarios del prodcuto: ' + req.params.idProducto + " y estas enfocado en el comentario " + req.params.idComentario);

  }
});  







// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use((req,res,netx) =>{
  res.status(404).render('not-found')
})
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

