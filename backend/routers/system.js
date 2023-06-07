const express = require("express");

const api = express.Router();

const multiparty = require("connect-multiparty");
const SystemController = require("../controllers/SystemController");


api.post("/registrar_usuario_admin", SystemController.registrar_usuario_admin);
api.post("/login_admin", SystemController.login_admin);



module.exports = api;
