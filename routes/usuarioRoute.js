const usuarioCtrl = require('../controller/usuarioController.js');

module.exports = (app) => {

    app.route('/api/user/:id')
        .get(usuarioCtrl.getUsuario);

    app.route('/api/usuario')
        .post(usuarioCtrl.cadastrarUsuario)
        .get(usuarioCtrl.getUsuarios);
}