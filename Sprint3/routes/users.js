var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
var fs = require ('fs')

/* ABM - CRUD*/

/*REGISTRARSE*/

router.get('/register',userController.create);
router.post('/register',userController.store);

/*loguearse*/
router.get('/login',userController.login);
router.post('/login/:user_id',userController.sendlogin);





module.exports = router;