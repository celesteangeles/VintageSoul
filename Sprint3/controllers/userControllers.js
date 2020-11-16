let userController = {
    home: function (req,res){
       res.render('/home');
    },
    formularioDeProducto: function (req, res){
       res.render('/formularioDeProducto');
    },
    login: function (req, res){
       res.render ('/login');
    },
    register : function (req,res){
       res.render('/register');
    },
    detalleDeProducto : function (req, res){
       res.render ('/detalleDeProducto');
    },
    carritoDeCompras : function (req, res){
       res.render ('/carritoDeCompras');
    }
 };
 
 module.exports = userController;