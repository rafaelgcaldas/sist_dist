const repositorio = require('../repositorio/usuarioRepositorio.js');

module.exports = {
    cadastrarUsuario,
    getUsuario,
    getUsuarios
}

function cadastrarUsuario(req, res, next) {
    repositorio.cadastrarUsuario(req.body, (err, dados) => {
        if (err)
            res.status(err).json({ error: dados });
        else
            res.status(200).json({ usuario: dados });
    });
}

function getUsuario(req, res, next) {
    repositorio.getUsuario(req.params.id, (err, dados) => {
        if (err)
            res.status(err).json({ error: dados });
        else
            res.status(200).json({ usuario: dados });
    });
}

function getUsuarios(req, res, next) {
    repositorio.getUsuarios((err, dados) => {
        if (err)
            res.status(err).json({ error: dados });
        else
            res.status(200).json({ usuario: dados });
    });
}