var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const usersMiddleware = require('../middlewares/userMiddleware');
var fs = require ('fs');
const {check, validationResult, body} = require('express-validator');

/* ABM - CRUD*/

/*REGISTRARSE*/

router.get('/register',userController.register);
router.post('/register',
 usersMiddleware.validarRol,
[
    check('user_email').isEmail().withMessage('Email inválido'),
    check('user_name').isLength({min:2,max:30}).withMessage('Nombre invalido.')
],
userController.store);

router.get('/contactos',userController.infContactos);


/* LOGIN*/ 
router.get('/login',userController.login);
router.post('/login',
[
    check('user_email').isEmail().withMessage('Email inválido'),
    check('user_password').not().isEmpty().withMessage('Contraseña invalida.')
],
userController.sendLogin);

/*carrito de compras*/


module.exports = router;