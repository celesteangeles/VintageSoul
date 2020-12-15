const fs = require ('fs');
const bcryptjs = require('bcryptjs');
const { stringify } = require('querystring');
let passEcritpada = bcryptjs.hashSync('pass',10);
let check = bcryptjs.compareSync('pass',passEcritpada);

let product = JSON.parse(fs.readFileSync(__dirname+"/../database/products.json"));

let productsController = {

create: function(req,res,next){
    res.render('products/create')
},

store: function (req,res){
//guarda el producto en json

//tomo producto como objeto
let newProduct = req.body;
newProduct.product_id = Number(req.body.product_id);
newProduct.product_price = Number(req.body.product_price);
newProduct.product_quantity = Number(req.body.product_quantity);

/*agregar propiedad nueva al json*/
newProduct.stock = 0;
product.push(newProduct); 

//convierto en JSON Y LO GUARDO 
fs.writeFileSync(__dirname+"/../database/products.json", JSON.stringify(product));
res.send('Carga exitosa');


},
edit:  function (req,res,next){
    // mismo formulario de create 
    let productFind;
    //busca el producto por id por req.query
    products.forEach(function(product){
    if (product.product_id == req.params.product_id){
        //si es el id, se guarda y se corta el bucle
        productFind = product;
 }
});
 if (productFind){
     res.render('products/edit',{product:productFind});
 }else{
     res.send('No existe este producto.');
    }      
},  

    update: function(req,res){
      let productFind;
      products.forEach(function(product){
          if(product.product_id == req.params.product_id){
              product.product_name == req.body.product_name;
              product.product_price == req.body.product_price;
              product.product_quantity == req.body.product_quantity;
              product.product_waist == req.body.product_waist;
              product.product_description == req.body.product_description;


          }
      });
      res.send('actualizado exitosamente')
    },
    destroy: function(req,res, next){
       let newProducts = products.filter( function(product){
           return product.product_id != req.params.product_id
       });

        fs.writeFileSync(__dirname+'/../database/products.json', JSON.stringify(products));
      res.send ('Producto eliminado exitosamente')

    },

    list: function(req,res,next){
        res.render('/products/list',({products}))
    }

}

    module.exports = productsController;