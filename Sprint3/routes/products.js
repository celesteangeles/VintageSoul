var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');


//Multer y Path (carga de imagenes) //




/* ABM - CRUD*/

/*ALTA FORMULARIO DE PRODUCTOS create*/
router.get('/create',productsController.create); 
router.post('/create',productsController.store); 

/* EDITO UN PRODUCTO edit*/
router.get('/edit/:product_id',productsController.edit);
router.post('/edit/:product_id',productsController.update);


/*ELIMINO UN PRODUCTO*/

router.get('/destroy/:product_id',productsController.destroy);
/* LISTAR LOS PRODUCTOS lista de productos */

router.get('/list',productsController.list);



/*DETALLE DE PRODUCTOS Y CARRITO DE COMPRAS*/ 













module.exports = router;