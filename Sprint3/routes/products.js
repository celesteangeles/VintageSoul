var express = require('express');
var router = express.Router();
const productControllers = require('../controllers/productControllers');
var fs = require ('fs')

//Multer y Path (carga de imagenes) //

const multer = require('multer');
const path = require('path');
var storage = multer.diskStorage({
   destination:(req,file,cb)=>{
     cb(null,'public/images/products');
   },
   filename:(req,file,cb)=>{
     cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
   }
});

var upload = multer({storage:storage});

/* RUTAS GET, POST, DELETE, PUT */

/* CARRITO DE COMPRAS*/
router.get('/carritoDeCompras', productControllers.carritoDeCompras);

/*DETALLE DE PRODUCTOS*/ 

router.get('/detalleDeProducto', productControllers.detalleDeProducto);


/* EDITAR LISTADO DE PRODUCTOS*/


router.get('/edit/:nombre/:precio/:talle/', productControllers.edit);
router.post('/edit/:nombre/:precio/:talle/', productControllers.edit);


module.exports = router;