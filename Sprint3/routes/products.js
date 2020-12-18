var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');

var path = require('path');


//Multer y Path (carga de imagenes) //

const multer =require('multer');
var storage = multer.diskStorage({
    destination:(req,file,cb)=>{

        //configuracion de ruta donde se guarda
        cb( null,'public/images/products');
    },
    // nombre de la imagen
    filename: (req,file,cb)=>{
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

var upload = multer({storage:storage});


/* ABM - CRUD*/

/*ALTA FORMULARIO DE PRODUCTOS create*/
router.get('/create',productsController.create); 
router.post('/create',upload.any(),productsController.store); 

/* EDITO UN PRODUCTO edit*/
router.get('/edit/:product_id',productsController.edit);
router.post('/edit/:product_id',productsController.update);


/*ELIMINO UN PRODUCTO*/

router.get('/destroy/:product_id',productsController.destroy);
/* LISTAR LOS PRODUCTOS lista de productos */

router.get('/list',productsController.list);



/*DETALLE DE PRODUCTOS Y CARRITO DE COMPRAS*/ 













module.exports = router;