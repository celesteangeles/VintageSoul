let userController = {
    'home': function (req,res){
       res.render('/home.ejs');
    },
    'formularioDeProducto' : function (req, res){
       res.render('/formularioDeProducto.ejs');
    },
    'login': function (req, res){
       res.render ('/login.ejs');
    },
    'register' : function (req,res){
       res.render('/register.ejs');
    },
    'detalleDeProducto' : function (req, res){
       res.render ('/detalleDeProducto.ejs');
    },
    'carritoDeCompras' : function (req, res){
       res.render ('/carritoDeCompras.ejs');
    }
 };
 
 module.exports = user.Controller;