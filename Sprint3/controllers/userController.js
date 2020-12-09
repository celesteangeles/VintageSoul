const bcryptjs = require('bcryptjs');
let passEcritpada = bcryptjs.hashSync('pass',10);
let check = bcryptjs.compareSync('pass',passEcritpada);
let fs = require('fs');
  

let userController = {
    register : function(req, res){
        res.render('register')
    },
    search : function(req, res){
        let loQueBuscoElUsuario = req.query.search;

        
        let userResults = [];

        for (let i=0; i< users.length; i++) {
            if (users[i].name.includes(loQueBuscoElUsuario)){
                users.userResults.push(users[i]);
            }
        }
        res.render('userResults', {usersResults: usersResults});
 },

    list : function(req, res){
        let idUser = req.params.idUser;
        let users =[
            {id: 1, name: 'Vesito Rojo'},
            {id: 2, name: 'Zapatos negros'},
            {id: 3, name: 'Pantalon jean'},
            {id: 4, name: 'Remera Negra'},
            {id: 5, name: 'Conjunto promo'},
            {id: 6, name: 'Conjunto promo 2'}
        ];

        res.render('userList', {'users': users});

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
 },
 create : function(req, res){
    let usuario = {
         nombre: req.body.nombre,
         email: req.body.email,
         telefono: req.body.telefono,
         edad: req.body.edad
         }

         console.log(req.body);
        
        

         res.redirect("/users/formulariodeproducto")
        
},
/* ------LOGIN--------*/

login : function(req, res,next){
    console.log(req.body);
    res.render('login')
},

recibirLogin : function(req,res,next){
var usuario = req.query.usuario;
res.render('perfil', {elUsuario:usuario})
},

sendLogin : function(req,res,next){
    if (req.body.usuario == ""){
        res.redirect('/users/list')
    }else{
        res.redirect('/users/login')
    }
},


/* FORMULARIO DE PRODUCTO VISTA Y CREATE*/ 
formulariodeproducto: function (req,res){
    res.render("formulariodeproducto")
},

create: function(req, res){
    let usuario = {
         id: req.body.id,
         nombre: req.body.nombre,
         categoria: req.body.categoria,
         number: req.body.number,
         number: req.body.number,
         talle: req.body.number,
         envioGratis: req.body.envioGratis,
         oferta: req.body.oferta,
         promocion: req.body.promocion,
         imgsubido: req.body.imgsubido

         }

         console.log( usuario);
      res.redirect("list")

}
}

module.exports = userController;