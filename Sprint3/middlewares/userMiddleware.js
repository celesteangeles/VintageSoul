let usersMiddleware = {

    validarRol: function(req,res,next){
        console.log('middleware usuario')
        let newUser= req.body;
        if(newUser.rol == 1){
            next();
        }else if(newUser.rol == 2){
 res.send('solo registro para administradores')
        }
    }
}

module.exports = usersMiddleware;