const { writeFile, writeFileSync } = require("fs");

let userController = {
    'register' : function(req, res){
        res.render('register')
    },
    'login' : function(req, res){
        res.render('login')
    },
    'listProducts' : function(req, res){
        res.render('listProducts')
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
        let users =[
            {id: 1, name: 'Vesito Rojo'},
            {id: 2, name: 'Zapatos negros'},
            {id: 3, name: 'Pantalon jean'},
            {id: 4, name: 'Remera Negra'}
        ];

        res.render('userList', {'users': users});
    },

    search: function(req, res){
        let loQueBuscoElUsuario = req.query.search;

        let users =[
            {id: 1, name: 'Vesito Rojo'},
            {id: 2, name: 'Zapatos negros'},
            {id: 3, name: 'Pantalon jean'},
            {id: 4, name: 'Remera Negra'},
            {id: 5, name: 'Conjunto promo'}
        ];

        let usersResults= [];
        for (let i = 0; i < users.length; i++) {
            if (users[i].name.includes(loQueBuscoElUsuario)) {
                usersResults.push(users[i]);
            }
        }

        res.render('userResults', {usersResults : usersResults});
 },

 create: function(req, res){
    let usuario = {
         nombre: req.body.nombre,
         email: req.body.email,
         telefono: req.body.telefono,
         edad: req.body.edad,
         pais: req.body.pais
     }
let usuarioJSON = JSON.stringify(usuario);

fs.writeFileSync('usuario.JSON', usuario.JSON)


     res.redirect("/users/list");
 },

 edit: function(req,res){
     let idUser = req.params.idUser;
     let users =[
        {id: 1, name: 'Vesito Rojo'},
        {id: 2, name: 'Zapatos negros'},
        {id: 3, name: 'Pantalon jean'},
        {id: 4, name: 'Remera Negra'},
        {id: 5, name: 'Conjunto promo'}
    ];

    let userToEdit = users[idUser];

     res.render("userEdit" , { userToEdit: userToEdit});
 },

 
starting: function (req, res){

    let usuariologin = {
        email: req.body.email,
        password: req.body.password
    }
 let usuariologinJSON = JSON.stringify(usuariologin);

 fs.writeFileSync('usuariologin.JSON', usuariologin.JSON)


    res.redirect("/users/list");

 },

 agregarProducto : function (req, res) {
    res.redirect('/formulariodeproducto')
 }
 


};

module.exports = userController;