var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/Home', userController.home);

router.get('/formularioDeProducto', userController.formularioDeProducto);

router.get('/login', userController.login);

router.get('/register', userController.register);

router.get('/formulario'. userController.forumulario);

router.get('/carritoDeCompras'. userController.carritoDeCompras);

router.get('/detalleDeProducto', userController.detalleDeProducto);
 
module.exports = router;
