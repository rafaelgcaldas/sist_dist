const mysql = require('mysql');

module.exports = {
    cadastrarUsuario,
    getUsuario,
    getUsuarios
}

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sistemas_distribuidos'
});

connection.connect((err) => {
    if (err) {
        console.error('Error Conect: ', err.stack);
    }
});

function cadastrarUsuario(usuario, callback) {
    connection.query('INSERT INTO usuario SET ?', usuario, (err, results) => {
        if (err)
            callback(500, err);
        else {
            usuario.Id = results;
            callback(null, usuario);
        }
    });
}

function getUsuario(id, callback) {
    let sql = 'SELECT * FROM usuario WHERE id = ?';
    connection.query(sql, [id], function (err, results) {
        if (err)
            callback(500, err);
        else
            callback(null, results);
    });
}

function getUsuarios(callback) {
    let sql = 'SELECT * FROM usuario';
    connection.query(sql, function (err, results) {
        if (err)
            callback(500, err);
        else
            callback(null, results);
    });
}
