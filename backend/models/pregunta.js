const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PreguntaSchema = new Schema({
    pregunta: {type: String, required: true},
    respuesta: {type: String, required: true},
    link: {type: String, required: true},
    area: {type: String, required: true},
    createdAt: {type: Date, default: Date.now, required: true}
});

module.exports = mongoose.model('pregunta', PreguntaSchema);