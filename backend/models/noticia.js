const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoticiaSchema = new Schema({
    fecha_publicacion: {type: Date, default: Date.now, required: true},
    titulo: {type: Date, required: true},
    descripcion: {type: String, required: true},
    url_imagen: {type: String, required: true},
    createdAt: {type: Date, default: Date.now, required: true}
});

module.exports = mongoose.model('noticia', NoticiaSchema);


