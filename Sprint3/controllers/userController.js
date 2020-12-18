let fs = require('fs');
const bcrypt = require('bcrypt');
const { check, validationResult, body, cookie } = require('express-validator');
let users = JSON.parse(fs.readFileSync(__dirname + "/../database/users.json"));

let userController = {

    /* REGISTRACION -----*/
    register: function (req, res, next) {
        //vista de registracion
        res.render('users/register')

    },

    store: function (req, res, next) {
        let errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('users/register', { errors: errors.errors })
        }
        let newUser = req.body;
        newUser.user_password = bcrypt.hashSync(newUser.user_password, 10)
        console.log(users)
        users.push(newUser);

        fs.writeFileSync(__dirname + "/../database/users.json", JSON.stringify(users));
        res.redirect("users/list");

        res.send('Bienvenido ' + newUser.user_name);
    },
/* LOGIN VISTA*/ 
    login: function (req, res, next) {
        res.render('users/login');
    },
/*ERRORES DE LOGIN*/
    sendLogin: function (req, res, next) {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('users/login', { errors: errors.errors })
        }

        //login INGRESO DE DATOS Y CORROBORACION DE CONTRASEÑAS
        // ARCHIVO JSON. con los usuarios (Declardo arriba de todo)
        //recorrer los usuarios
        let userFind;
        for (var i = 0; i < users.length; i++) {
            //condicionalpara ver si coinciden el mail y la contraseña 
            //let user= users[i]; // del array del json
            //let userLoggin = req.body;
           
            if (users[i].user_email == req.body.user_email){
                if(bcrypt.compareSync(req.body.user_password, users[i].user_password)){
                    userFind = users[i];
                    break;
                }
            }
        }
        if (userFind){
            res.send('Bienvenido' + userFind.user_name);
        } else{
            res.send('contraseña invalida');

        }
    }

},

   /*/ infContactos:function(req,res,next){
        let contactos = [
            {
                user_name: 'Diego',
                user_email: 'diego@diego.com'
                
            },
            {
                user_name: 'noelia',
                user_email: 'noelia@noelia.com'
               
            },
            {
                user_name: 'reena',
                user_email: 'reena@reena.com'
              
            }
        ]
    }
    res.render('users/contactos', { contactos: contactos })
}


*/
module.exports = userController;