const fs = require ('fs');
let products = JSON.parse(fs.readFileSync(__dirname+"/../database/products.json"));

const productsController = {
   create: function(req,res,next){
       //muestra el formulario
    res.render("products/create");
},
store: function (req,res,next){
//guarda los datos en el archivo .json
//tomo producto como objeto y paso a numero los necesarios tambien se puede multiplicar 
   let newProduct = req.body;
    newProduct.product_id = Number(req.body.product_id);
    newProduct.product_price = Number(req.body.product_price);
    newProduct.product_quantity = Number(req.body.product_quantity);
    newProduct.stock = 0;

products.push(newProduct); 

//convierto en JSON Y LO GUARDO 
fs.writeFileSync(__dirname+"/../database/products.json",JSON.stringify(products));
res.redirect("/products/list");
},
edit:  function (req,res,next){
let productFind;
 //busco el producto por id
    products.forEach(function(product){
      if(product.product_id == req.params.product_id){
//si corresponde el id,lo guardo y corto el bucle
    productFind = product;
    res.render('products/edit',{product:productFind});
 }
});
   res.send('No existe el producto');

},
update: function(req,res,next){
    let productFind;
    //se busca el producto del id
    products.forEach(function(product){
        if (product.product_id == req.params.product_id){
            //si corresponde el id, lo guarda y se corta el bucle
            product.product_name = req.body.product_name;
            product.product_price = req.body.product_price;
            product.product_waist = req.body.product_waist;
            product.product_category = req.body.product_category;
            product.product_quantity = req.body.product_quantity;
            product.product_description = req.body.product_description;
        }
    });

res.redirect('/products/list');
},
destroy: function(req,res,next){
    //filtro el producto con el id del producto
    let newProducts = products.filter(function(product){
        return product.product_id != req.params.product_id
    });

    fs.writeFileSync(__dirname+"/../database/products.json",JSON.stringify(newProducts));
    res.redirect('/products/list');
},
list: function(req,res,next){
    res.render('products/list', {products});
}
}

    module.exports = productsController;