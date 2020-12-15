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
router.get('/edit/:product_id', productsController.edit);
router.post('/edit/:product_id', productsController.update);


/*ELIMINO UN PRODUCTO*/
router.get('/destroy/:product_id', productsController.destroy);

/* LISTAR LOS PRODUCTOS*/

router.get('/list', productsController.list);


/*DETALLE DE PRODUCTOS*/ 




/* EDITAR LISTADO DE PRODUCTOS*/





module.exports = router;