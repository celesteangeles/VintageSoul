const fs = require ('fs');
const bcryptjs = require('bcryptjs');
const { stringify } = require('querystring');
let passEcritpada = bcryptjs.hashSync('pass',10);
let check = bcryptjs.compareSync('pass',passEcritpada);

let products = JSON.parse(fs.readFileSync(__dirname+"/../database/products.json"));

let productsController = {

create: function(req,res,next){
    res.render('products/create')
},

store: function (req,res,next){
//guarda el producto en json



//tomo producto como objeto
let newProduct = req.body;
newProduct.product_id = Number(req.body.product_id);
newProduct.product_price = Number(req.body.product_price);

//agregar propiedad nueva al json
newProduct.stock = 0;
products.push(newProduct);

//convierto en JSON Y LO GUARDO 
fs.writeFileSync(__dirname+"/../database/products.json", JSON.stringify(products));
res.send('Carga exitosa');

},
edit:  function (req,res, next){
    // mismo formulario de create 
    let productFind;
    products.forEach(function(product){
    if (product.id_product == req.params.id_product){
        //si es el id, se guarda y se corta el bucle
        productFind = product;
 }
});
 if (productFind){
     res.render('/products/edit', {product:productFind});
 }else{
     res.send('No existe este producto.');
}        
},

    update: function(req,res,next){
        res.render("products/edit")
    }

}

    module.exports = productsController;