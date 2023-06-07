const Funcionario = require("../models/funcionario");
const Pregunta = require("../models/pregunta");
const Noticia = require("../models/noticia");

const mostrar_noticias = async function(req,res){
    let reg = await Noticia.find({});
    res.status(200).send({data:reg});
}

const mostrar_noticia_por_id = async function(req,res){
    var id = req.params['id'];
    let reg = await Noticia.findById({_id: id});
    res.status(200).send({data:reg});
}

const mostrar_preguntas = async function(req,res){
    let reg = await Pregunta.find({});
    res.status(200).send({data:reg});
}

const mostrar_pregunta_por_id = async function(req,res){
    var id = req.params['id'];
    let reg = await Pregunta.findById({_id:id});
    res.status(200).send({data:reg});
}

const mostrar_funcionarios = async function(req,res){
    let reg = await Funcionario.find({});
    res.status(200).send({data:reg});
}

const mostrar_funcionario_por_id = async function(req,res){
    var id = req.params['id'];
    let reg = await Funcionario.findById({_id:id});
    res.status(200).send({data:reg});
}

module.exports = {
    mostrar_noticias,
    mostrar_noticia_por_id,
    mostrar_preguntas,
    mostrar_pregunta_por_id,
    mostrar_funcionarios,
    mostrar_funcionario_por_id
}