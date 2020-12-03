const fs = require('fs');

let userController = {
    'register' : function(req, res){
        res.render('register')
    },
    'login' : function(req, res){
        res.render('login')
    },
    'carritoDeCompras' : function(req, res){
        res.render('carritoDeCompras')
    },
    'formularioDeProducto' : function(req, res){
        res.render('formularioDeProducto')
    },
    
    'detalleDeProducto' : function(req, res){
        res.render('detalleDeProducto')
    },
    'creacion' : function(req, res){
        res.render('crecion')
    },

    'list' : function(req, res){

        let archivoJSON = fs.readFileSync('usuarios.json', {encoding: 'utf-8'});

        let users = JSON.parse(archivoJSON);

        res.render('userList', {'users': users});
    },

    search: function(req, res){
        let loQueBuscoElUsuario = req.query.search;

        let archivoJSON = fs.readFileSync('usuarios.json', {encoding: 'utf-8'});

        let users = JSON.parse(archivoJSON);

        let usersResults= [];

        for (let i = 0; i < users.length; i++) {
            if (users[i].name.includes(loQueBuscoElUsuario)) {
                usersResults.push(users[i]);
            }
        }

        res.render('userResults', {usersResults: usersResults});
 },

 create: function(req, res){
    let usuario = {
         nombre: req.body.nombre,
         email: req.body.email,
         telefono: req.body.telefono,
         edad: req.body.edad
         }

      let archivoUsuario = fs.readFileSync('usuarios.json', {encoding: 'utf-8'});
      let usuarios;

             if (archivoUsuario == "") {
             usuarios = [];
            } else {
             usuarios = JSON.parse(archivoUsuario);
}
             usuarios.push(usuario);
             usuariosJSON = JSON.stringify(usuarios);

fs.writeFileSync('usuarios.json', usuariosJSON);

res.redirect("/users/list");

 },

 edit: function(req,res){
     let idUser = req.params.idUser;
     let users =[
        {id: 1, name: 'Vesito Rojo'},
        {id: 2, name: 'Zapatos negros'},
        {id: 3, name: 'Pantalon jean'},
        {id: 4, name: 'Remera Negra'},
        {id: 5, name: 'Conjunto promo'},
        {id: 6, name: 'Conjunto promo 2'}
    ];

    let userToEdit = users[idUser];

     res.render("userEdit" , { userToEdit: userToEdit});
 }
 
};

module.exports = userController;