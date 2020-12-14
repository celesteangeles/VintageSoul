var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');
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

/* ABM*/

/*ALTA FORMULARIO DE PRODUCTOS*/
router.get('/create', productsController.create); 
router.post('/create', productsController.store); 

/* EDITO UN PRODUCTO*/
router.get('/edit/:id_product', productsController.edit);
router.post('/edit/:id_product', productsController.update);


/*ELIMINO UN PRODUCTO*/

/* CARRITO DE COMPRAS*/


/*DETALLE DE PRODUCTOS*/ 




/* EDITAR LISTADO DE PRODUCTOS*/





module.exports = router;