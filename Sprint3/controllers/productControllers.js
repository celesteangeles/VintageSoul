const bcryptjs = require('bcryptjs');
let passEcritpada = bcryptjs.hashSync('pass',10);
let check = bcryptjs.compareSync('pass',passEcritpada);
let fs = require('fs');



let productControllers = {

'carritoDeCompras' : function(req, res){
    res.render('carritoDeCompras')
},

'detalleDeProducto' : function(req, res){
    res.render('detalledeproducto')
},

'listProducts' : function(req, res, next){
    res.render('userList', {'users': users});
},

'edit': function(req,res){
    
    console.log(req.params)

    res.render('edit', {
        nombre:req.params.nombre,
        precio:req.params.precio,
        talle:req.params.talle
    })
}
}

    module.exports = productControllers;