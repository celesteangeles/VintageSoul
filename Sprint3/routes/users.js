var express = require('express');
var router = express.Router();
const userController = require('../controllers/userControllers');

//multer y path//

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


/* GET users listing. */


router.get('/register', userController.register);

router.post('/register', userController.create);



router.get('/login', userController.login);

router.get('/list', userController.list);

router.get('/search', userController.search);


router.get('/formulariodeproducto',userController.create2)
router.post('/formulariodeproducto', upload.any(),userController.store);

router.get('/edit/:idUser', userController.edit);

router.put('/edit/:idUser', userController.edit);


 
module.exports = router;