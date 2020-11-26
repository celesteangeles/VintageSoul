var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/', function(req, res) {
  res.render('Home');
});

router.get('/carritoDeCompras', function(req, res) {
  res.render('carritoDeCompras');
});

router.get('/detalleDeProducto', function(req, res) {
  res.render('detalleDeProducto');
});

router.get('/formularioDeProducto', function(req, res) {
  res.render('formularioDeProducto');
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.get('/register', function(req, res) {
  res.render('register');
});


router.get('/creacion', function(req, res) {
  res.render('creacion');
});





module.exports = router;
