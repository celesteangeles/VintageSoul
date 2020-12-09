var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
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


/* RUTAS GET, POST, DELETE, PUT  */

/*REGISTRARSE*/

router.get('/register',userController.register);

router.post('/register',userController.create);

/*loguearse*/


router.get('/login', userController.login);
router.post('/login', userController.sendLogin);

/* FORMULARIO DE PRODUCTOS; CREAR PRODUCTO NUEVO*/
router.get('/formulariodeproducto', userController.formulariodeproducto);
router.post('/formulariodeproducto',userController.create);


/*LISTA DE PRODUCTOS VISTA ADM*/

router.get('/list', userController.list);


/*BUSCAR Y EDITAR PRODUCTOS EN LISTADO POR ADM*/ 

router.post('/search', userController.search);

router.put('/edit/:idUser', userController.edit);


 
module.exports = router;