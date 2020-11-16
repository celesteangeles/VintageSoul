var express = require('express');
var router = express.Router();
const userController = require('../controllers/userControllers');


/* GET users listing. */


router.get('/Home', userController.home);

router.get('/formularioDeProducto', userController.formularioDeProducto);

router.get('/login', userController.login);

router.get('/register', userController.register);

router.get('/formularioDeProducto', userController.formularioDeProducto);

router.get('/carritoDeCompras', userController.carritoDeCompras);

router.get('/detalleDeProducto', userController.detalleDeProducto);
 
module.exports = router;
