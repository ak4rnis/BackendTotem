const Noticia = require("../models/noticia");
const Funcionario = require("../models/funcionario");
const Pregunta = require("../models/pregunta");
const fs = require("fs");
const path = require("path");

//Noticias Admin

const mostrar_noticias_admin = async function(req,res){
    if(req.user){
        if(req.user.rol == 'admin'){
            let reg = await Noticia.find({});
            res.status(200).send({data:reg});
        }else{
            res.status(500).send({message: 'NoAccess'});
        }
    }else{
        res.status(500).send({message: 'NoAccess'});
    }
}
const crear_noticia_admin = async function(req,res){
    if(req.user){
        if(req.user.rol == 'admin'){
            var data = req.body;

            let reg = await Noticia.create(data);
            res.status(200).send({data:reg});
        }else{
            res.status(500).send({message: 'NoAccess'});
        }
    }else{
        res.status(500).send({message: 'NoAccess'});
    }
}
const mostrar_noticia_admin_por_id = async function(req,res){
    if(req.user){
        if(req.user.rol == 'admin'){
            var id = req.params['id'];

            let reg = await Noticia.findById({_id:id});
            res.status(200).send({data:reg});
        }else{
            res.status(500).send({message: 'NoAccess'});
        }
    }else{
        res.status(500).send({message: 'NoAccess'});
    }
}
const actualizar_noticia_admin = async function(req,res){
    if(req.user){
        if(req.user.rol == 'admin'){
            var id = req.params['id'];
            var data = req.body;

            let reg = await Noticia.findByIdAndUpdate({_id:id}, {
                fecha_direccion: data.fecha_direccion,
                titulo: data.titulo,
                descripcion: data.descripcion,
                url_imagen: data.url_imagen,

            });
            res.status(200).send({data:reg});
        }else{
            res.status(500).send({message: 'NoAccess'});
        }
    }else{
        res.status(500).send({message: 'NoAccess'});
    }
}

const eliminar_noticia_admin = async function(req,res){
    if(req.user){
        if(req.user.rol == "admin")
        {
            var id = req.params['id'];
            let reg = await Noticia.findByIdAndRemove({_id: id});
            res.status(200).send({data:reg});
        }else{
            res.status(500).send({message: 'NoAccess'});
        
        }
    }else{
        res.status(500).send({message: 'NoAccess'});

    }
}

// Preguntas Admin

const mostrar_preguntas_admin = async function(req,res){
    if(req.user){
        if(req.user.rol == "admin")
        {
            
            let reg = await Pregunta.find({});
            res.status(200).send({data:reg});
        }else{
            res.status(500).send({message: 'NoAccess'});
        
        }
    }else{
        res.status(500).send({message: 'NoAccess'});

    }
}

const crear_pregunta_admin = async function(req,res){
    if(req.user){
        if(req.user.rol == "admin")
        {
            var data = req.body;
            let reg = await Noticia.create(data);
            res.status(200).send({data:reg});
        }else{
            res.status(500).send({message: 'NoAccess'});
        
        }
    }else{
        res.status(500).send({message: 'NoAccess'});

    }
}

const mostrar_pregunta_por_id = async function(req,res){
    if(req.user){
        if(req.user.rol == 'admin'){
            var id = req.params['id'];

            let reg = await Pregunta.findById({_id:id});
            res.status(200).send({data:reg});
        }else{
            res.status(500).send({message: 'NoAccess'});
        }
    }else{
        res.status(500).send({message: 'NoAccess'});
    }
}

const actualizar_pregunta_admin = async function(req,res){
    if(req.user){
        if(req.user.rol == 'admin'){
            var id = req.params['id'];
            var data = req.body;

            let reg = await Noticia.findByIdAndUpdate({_id:id}, {
                pregunta: data.pregunta,
                respuesta: data.respuesta,
                link: data.respuesta,
                area: data.area,
            });
            res.status(200).send({data:reg});
        }else{
            res.status(500).send({message: 'NoAccess'});
        }
    }else{
        res.status(500).send({message: 'NoAccess'});
    }
}

const eliminar_pregunta_admin = async function(req,res){
    if(req.user){
        if(req.user.rol == 'admin'){
            var id = req.params['id'];

            let reg = await Noticia.findByIdAndDelete({_id:id});
            res.status(200).send({data:reg});
        }else{
            res.status(500).send({message: 'NoAccess'});
        }
    }else{
        res.status(500).send({message: 'NoAccess'});
    }
}

//Funcionarios Admin

const mostrar_funcionarios_admin = async function(req,res){
    if(req.user){
        if(req.user.rol == 'admin'){
            

            let reg = await Funcionario.find({});
            res.status(200).send({data:reg});
        }else{
            res.status(500).send({message: 'NoAccess'});
        }
    }else{
        res.status(500).send({message: 'NoAccess'});
    }
}

const obtener_foto_funcionario = async function(req,res){
    var img = req.params['img'];
    fs.stat('./uploads/funcionarios/'+img, function(err){
        if(!err){
            let path_img = './uploads/funcionarios/'+img;
            res.status(200).sendFile(path.resolve(path_img));
        }else{
            let path_img = './uploads/default.png';
            res.status(200).sendFile(path.resolve(path_img));
        }
    })
}

const crear_funcionario_admin = async function(req,res){
    if(req.user){
        if(req.user.rol == "admin"){
            let data = req.body;
            var img_path = req.files.funcionario ? req.files.funcionario.path : null;
            if(img_path !== null){
                var name = img_path.split('\\');
            }
            if(typeof name !== 'undefined' && name.length >= 3){
                var funcionario_name = name[2];
            }
            data.url_fotografia = funcionario_name;
            let reg = await Funcionario.create(data);
            res.status(200).send({data:reg});
        }else{
            res.status(500).send({message: 'NoAccess'});
        }
    }else{
        res.status(500).send({message: 'NoAccess'});
    }
}

const mostrar_funcionario_admin_por_id = async function(req,res){
    if(req.user){
        if(req.user.role == "admin"){
            var id = req.params['id'];
            let reg = await Funcionario.findById({_id: id});
            res.status(200).send({data:reg});
        }else{
            res.status(500).send({message: 'NoAccess'});
        }
    }else{
        res.status(500).send({message: 'NoAccess'});
    }
}

const actualizar_funcionario_admin = async function(req,res){
    if(req.user){
        if(req.user.rol == "admin"){
            var id = req.params['id'];
            var data = req.body;
            if(req.files){
                var img_path = req.files.funcionario ? req.files.funcionario.path : null;
                if(img_path !== null){
                    var name = img_path.split('\\');
                }
                if(typeof name !== 'undefined' && name.length >= 3){
                    var funcionario_name = name[2];
                }
                let reg = await Funcionario.findByIdAndUpdate({_id: id},{
                    nombre: data.nombre,
                    apellido: data.apellido,
                    area: data.area,
                    url_fotografia: funcionario_name,
                    correo: data.correo,
                    ubicacion: data.ubicacion,
                    tipo_funcionario: data.tipo_funcionario,
                });
                fs.stat('./uploads/funcionarios/'+reg.url_fotografia, function(err){
                    if(!err){
                        fs.unlink('./uploads/funcionarios/'+img, (err) => {
                            if(err) throw err;
                        })
                    }
                })
                res.status(200).send({data:reg});
            }else{
                let reg = await Funcionario.findByIdAndUpdate({_id:id},{
                    nombre: data.nombre,
                    apellido: data.apellido,
                    area: data.area,
                    correo: data.correo,
                    ubicacion: data.ubicacion,
                    tipo_funcionario: data.tipo_funcionario,
                });
                res.status(200).send({data:reg});
            }
            
        }else{
            res.status(500).send({message: 'NoAccess'});
        }
    }else{
        res.status(500).send({message: 'NoAccess'});
    }
}

const eliminar_funcionario_admin = async function(req,res){
    if(req.user){
        if(req.user.rol == "admin")
        {
            var id = req.params['id'];
            let reg = await Funcionario.findByIdAndRemove({_id: id});
            res.status(200).send({data:reg});
        }else{
            res.status(500).send({message: 'NoAccess'});
        
        }
    }else{
        res.status(500).send({message: 'NoAccess'});

    }
}

module.exports = {
    mostrar_noticias_admin,
    crear_noticia_admin,
    mostrar_noticia_admin_por_id,
    actualizar_noticia_admin,
    eliminar_noticia_admin,
    mostrar_preguntas_admin,
    crear_pregunta_admin,
    mostrar_pregunta_por_id,
    actualizar_pregunta_admin,
    eliminar_pregunta_admin,
    mostrar_funcionarios_admin,
    crear_funcionario_admin,
    mostrar_funcionario_admin_por_id,
    actualizar_funcionario_admin,
    eliminar_funcionario_admin,
    obtener_foto_funcionario
}

