const express = require("express");
const AdministradorController = require("../controllers/AdministradorController");
const api = express.Router();
const auth = require("../middlewares/authenticated");
const multiparty = require("connect-multiparty");
const path= multiparty({uplaodDir: './uploads/funcionarios'});

//Noticias 
api.post('/crear_noticia_admin', auth.auth, AdministradorController.crear_noticia_admin);
api.get('/mostrar_noticias_admin', auth.auth, AdministradorController.mostrar_noticias_admin);
api.get('/mostrar_noticia_admin_por_id/:id', auth.auth, AdministradorController.mostrar_noticia_admin_por_id);
api.put('/actualizar_noticia_admin/:id', auth.auth, AdministradorController.actualizar_noticia_admin);
api.delete('/eliminar_noticia_admin/:id', auth.auth, AdministradorController.eliminar_noticia_admin);

//Preguntas
api.post('/crear_pregunta_admin', auth.auth, AdministradorController.crear_pregunta_admin);
api.get("/mostrar_preguntas_admin", auth.auth, AdministradorController.mostrar_preguntas_admin);
api.get("/mostrar_pregunta_admin_por_id/:id", auth.auth, AdministradorController.mostrar_pregunta_por_id);
api.put("/actualizar_pregunta_admin/:id", auth.auth, AdministradorController.actualizar_noticia_admin);
api.delete("/eliminar_pregunta_admin/:id", auth.auth, AdministradorController.eliminar_pregunta_admin);

//Funcionarios

api.post('/crear_funcionario_admin', [auth.auth, path], AdministradorController.crear_funcionario_admin);
api.get('/mostrar_funcionarios_admin', auth.auth, AdministradorController.mostrar_funcionarios_admin);
api.get('/mostrar_funcionario_admin_por_id/:id', auth.auth, AdministradorController.mostrar_funcionario_admin_por_id);
api.get('/obtener_foto_funcionario/:img', AdministradorController.obtener_foto_funcionario);
api.put('/actualizar_funcionario_admin/:id', [auth.auth, path], AdministradorController.actualizar_funcionario_admin);
api.delete('/eliminar_funcionario_admin/:id', auth.auth, AdministradorController.eliminar_funcionario_admin);

module.exports = api;
