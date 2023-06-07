const jwt = require("jwt-simple");
const moment = require('moment');
const secret = 'drakarnis';

exports.createToken = function(user){
    const payload = {
        sub: user._id,
        nombre: user.nombre,
        correo: user.correo,
        rol: user.rol,
        iat: moment().unix(),
        exp: moment().add(10000, 'years').unix()
    }
    return jwt.encode(payload, secret);
}