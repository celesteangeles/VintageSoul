var express = require('express');
var router = express.Router();
const userController = require('../controllers/userControllers');


/* GET users listing. */


router.get('/register', userController.register);

router.post('/register', userController.create);

router.get('/login', userController.login);

router.post('/login', userController.starting);

router.get('/list', userController.list);

router.get('/search', userController.search);

router.get('/formulariodeproducto', userController.formularioDeProducto);

router.post('/formulariodeproducto', userController.agregarProducto);

router.get('/edit/:idUser', userController.edit);

router.put('/edit' ,function(req,res){
  res.send(" soy de edit");
});

router.delete('/delete/:idUser',function(req,res){
  res.send(" soy de delete");
});
 
module.exports = router;