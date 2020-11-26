var express = require('express');
var router = express.Router();
let userController = require('../controllers/userControllers.js')


router.get('/carritoDeCompras', userController.carritoDeCompras)
router.get('/detalleDeProducto', userController.detalleDeProducto)
router.get('/formularioDeProducto', userController.formularioDeProducto)
router.get('/listProducts', userController.listProducts)




module.exports = router;