const bcryptjs = require('bcryptjs');
let passEcritpada = bcryptjs.hashSync('pass',10);
let check = bcryptjs.compareSync('pass',passEcritpada);
let fs = require('fs');
  

let userController = {

    /* REGISTRACION -----*/ 
    store : function(req,res){
          res.render('register')
    },
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

    list : function(req, res, next){
      
       let usuarioLogueado ="";
        let productos =[
            {id: 1, 
            nombre: 'Vesito Rojo',
            precio: 1500},
            {id: 2,
            nombre: 'Zapatos negros',
            precio: 500},
            {id: 3,
            nombre: 'Pantalon jean',
            precio: 800},
            {id: 4,
            nombre: 'Remera Negra',
            precio: 500},
            {id: 5,
            nombre: 'Conjunto promo',
            precio: 2500},
            {id: 6,
            nombre: 'Conjunto promo 2',
            precio: 2550}
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
         password: req.body.password,
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
        res.redirect('/users/amigos')
    }else{
        res.redirect('/users/login')
    }
},


/*CONTACTOS*/
contactos: function(req,res,next){
    res.render('contactos')
},

usuarioPerfil: function (req,res, next){
 let contactos =[
     {
     nombre:'diego',
     email:'diego@diego.com',
     username:'sakura'
     },
     {
    nombre:'salem',
    email:'salem@salem.com',
    username:'salem'
    },
    {
    nombre:'moroha',
    email:'moroha@moroha.com',
    username:'moroha'
    }
 ]
       res.render('contactos', {contactos:contactos})
},
       usuarioInstagram : function (req, res, next){
        res.send('bienvenido' + req.parmas.usuario);

},

/* FORMULARIO DE PRODUCTO VISTA Y CREATE*/ 
formulariodeproducto: function (req,res){
    res.render("formulariodeproducto")
},
sendMenssage: function(req,res){

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