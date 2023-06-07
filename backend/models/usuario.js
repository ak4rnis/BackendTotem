const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    nombre: {type: String, required: true},
    correo: {type: String, required: true},
    password: {type: String, required: true},
    rol: {type: String, required: true},
    createdAt: {type: Date, default: Date.now, required: true}
});

module.exports = mongoose.model('usuario', UsuarioSchema);

