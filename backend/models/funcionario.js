const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FuncionarioSchema = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    area: {type: String, required: true},
    url_fotografia: {type: String, required: false},
    correo: {type: String, required: true},
    ubicacion: {type: String, required: true},
    tipo_funcionario: {type: String, required: true},
    createdAt: {type: Date, default: Date.now, required: true}
});

module.exports = mongoose.model("funcionario",FuncionarioSchema);
