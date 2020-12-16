let fs = require('fs');
let user = JSON.parse(fs.readFileSync(__dirname+"/../database/users.json"));  

let userController = {

    /* REGISTRACION -----*/ 
    create: function(req,res,next){
        //vista de registracion
        res.render('users/register')
    },
    //guarda datos en json
    store: function(req,res,next){
     
    let newUser = req.body;
     newUser.user_age = Number(req.body.user_age);    
     user.push(newUser); 

     //convierto en JSON Y LO GUARDO 
     fs.writeFileSync(__dirname+"/../database/users.json",JSON.stringify(user));
     res.redirect('login');
},
login: function(req,res,next){
    res.render('users/login');
},
sendlogin: function(req,res,next){
    res.redirect('home');
}
}

module.exports = userController;