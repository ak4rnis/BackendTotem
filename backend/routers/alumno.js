const express = require("express");
const AlumnoController = require("../controllers/AlumnoController");
const AdministradorController = require("../controllers/AdministradorController");
const api = express.Router();
const auth = require("../middlewares/authenticated");
const multiparty = require("connect-multiparty");
const path= multiparty({uplaodDir: './uploads/funcionarios'});

//Noticias 

api.get('/mostrar_noticias', auth.auth, AlumnoController.mostrar_noticias);
api.get('/mostrar_noticia_por_id/:id', AlumnoController.mostrar_noticia_por_id);


//Preguntas
api.get("/mostrar_preguntas", AlumnoController.mostrar_preguntas);
api.get("/mostrar_pregunta_por_id/:id", AlumnoController.mostrar_pregunta_por_id);


//Funcionarios


api.get('/mostrar_funcionarios', AlumnoController.mostrar_funcionarios);
api.get('/mostrar_funcionario_por_id/:id', AlumnoController.mostrar_funcionario_por_id);



module.exports = api;
