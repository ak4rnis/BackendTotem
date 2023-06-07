const Usuario = require("../models/usuario");
const bcrypt = require("bcrypt-nodejs");
const jwt = require("../helpers/jwt");

const registrar_usuario_admin = async function(req,res){
    let data = req.body;
    let admin_arr = [];
    admin_arr = await Usuario.find({correo: data.correo});
    if(admin_arr.length == 0){
        if(data.password){
            bcrypt.hash(data.password, null, null, async function(err, hash){
                if(hash){
                    data.password = hash;
                    data.rol = 'admin'
                    let reg = await Usuario.create(data);
                    res.status(200).send({data:reg});
                }else{
                    res.status(200).send({message: "ErrorServer", data:undefined});
                }
            })
        }else{
            res.status(200).send({message: 'No hay una contraseña', data: undefined})
        }
    }else{
        res.status(200).send({message: "El correo ya existe en la base de datos", data: undefined});
    }
}

const login_admin = async = async function(req,res){
    var data = req.body;
    var admin_arr = [];
    admin_arr = await Usuario.find({correo:data.correo});
    if(admin_arr.length == 0){
        res.status(200).send({message: 'El correo electrónico no existe', data: undefined});
    }else{
        let usuario = admin_arr[0];
        bcrypt.compare(data.password, user.password, async function(err,check){
            if(check){
                res.status(200).send({
                    data:user,
                    token: jwt.createToken(user)
                });
            }else{
                res.status(200).send({message: 'Las crdenciales no coinciden',data: undefined});
            }
        })
    }
}

module.exports = {
    registrar_usuario_admin,
    login_admin
}